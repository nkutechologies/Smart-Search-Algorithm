const { City, Brand, DishType, Diet } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const literal = Sequelize.literal;
const commonWords = ['i','a', 'an', 'the', 'in', 'on', 'at', 'for', 'with', 'and', 'or', 'but', 'by', 'to', 'of', 'from', 'is', 'it'];

async function extractEntities(searchTerm) {
    // Split search term into words and lower case them for case-insensitive matching
    let searchWords = searchTerm.toLowerCase().split(' ')?.filter(x => !commonWords?.includes(x));
    searchWords = searchWords?.map(x => x?.replace(/\W/g, ''))

    // Separate the first word and the rest
    const initialWord = searchWords[0];
    const restWords = searchWords.slice(1);

    // Create conditions for the first word using partial match
    const firstWordCondition = literal(`REPLACE(LOWER(name), "'", '') LIKE '${initialWord.toLowerCase()}%'`);

    // Create conditions for the rest of the words using exact match
    const restWordsConditions = restWords.map(word => literal(`REPLACE(LOWER(name), "'", '') = '${word.toLowerCase()}'`));

    // Combine all conditions
    const conditions = [firstWordCondition, ...restWordsConditions];

    // Create a single query to fetch all entities
    const entities = await Promise.all([
      City.findAll({where: {[Op.or]: conditions},attributes: ['id', 'name'], raw: true }),
      Brand.findAll({where: {[Op.or]: conditions},attributes: ['id', 'name'], raw: true }),
      DishType.findAll({where: {[Op.or]: conditions},attributes: ['id', 'name'], raw: true }),
      Diet.findAll({where: {[Op.or]: conditions},attributes: ['id', 'name'], raw: true })
    ]);
  
    const [cities, brands, dishTypes, diets] = entities;
    console.log('data', cities,brands,dishTypes,diets)
    // Function to find matches
    const findMatches = (items, terms) => {
      return items.filter(item => terms.some(term => item.name?.replace(/\W/g, '')?.toLowerCase()?.includes(term)));
    };
  
    // Filter matches for each entity type
    const cityMatches = findMatches(cities, searchWords);
    const brandMatches = findMatches(brands, searchWords);
    const dishTypeMatches = findMatches(dishTypes, searchWords);
    const dietMatches = findMatches(diets, searchWords);
  
    // Generate combinations based on the matches
    const results = [];
  
    const addCombination = (city, brand, dishType, diet) => {
      const combination = {};
      if (city) combination.city = { id: city.id, name: city.name };
      if (brand) combination.brand = { id: brand.id, name: brand.name };
      if (dishType) combination.dishType = { id: dishType.id, name: dishType.name };
      if (diet) combination.diet = { id: diet.id, name: diet.name };
      results.push(combination);
    };
  
    // Create combinations based on identified entities
    const createCombinations = (cities, brands, dishTypes, diets) => {
      if (!cities.length && !brands.length && !dishTypes.length && !diets.length) {
        results.push({});
        return;
      }
  
      const allCities = cities.length ? cities : [null];
      const allBrands = brands.length ? brands : [null];
      const allDishTypes = dishTypes.length ? dishTypes : [null];
      const allDiets = diets.length ? diets : [null];
  
      allCities.forEach(city => {
        allBrands.forEach(brand => {
          allDishTypes.forEach(dishType => {
            allDiets.forEach(diet => {
              addCombination(city, brand, dishType, diet);
            });
          });
        });
      });
    };
  
    createCombinations(cityMatches, brandMatches, dishTypeMatches, dietMatches);
  
    return results;
  }
  

module.exports = extractEntities;
