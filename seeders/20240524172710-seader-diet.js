'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Diets', [
      { name: "Vegan", createdAt: new Date(), updatedAt: new Date() },
      { name: "Vegetarian", createdAt: new Date(), updatedAt: new Date() },
      { name: "Pescatarian", createdAt: new Date(), updatedAt: new Date() },
      { name: "Paleo", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ovo Vegetarian", createdAt: new Date(), updatedAt: new Date() },
      { name: "Lacto Vegetarian", createdAt: new Date(), updatedAt: new Date() },
      { name: "Fruitarian", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ketogenic", createdAt: new Date(), updatedAt: new Date() },
      { name: "Gluten-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Dairy-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Egg-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Soy-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Grain-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Sugar-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Wheat-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Nut-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Carnivore", createdAt: new Date(), updatedAt: new Date() },
      { name: "Alkaline", createdAt: new Date(), updatedAt: new Date() },
      { name: "Pollotarian", createdAt: new Date(), updatedAt: new Date() },
      { name: "Shellfish-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Red Meat-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Beef-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Pork- & Shellfish-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Fish-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Low-FODMAP", createdAt: new Date(), updatedAt: new Date() },
      { name: "Anti Inflammatory Based", createdAt: new Date(), updatedAt: new Date() },
      { name: "Lower Carb", createdAt: new Date(), updatedAt: new Date() },
      { name: "Lower Glycemic Index", createdAt: new Date(), updatedAt: new Date() },
      { name: "Lower Oxalate", createdAt: new Date(), updatedAt: new Date() },
      { name: "Lower Histamine", createdAt: new Date(), updatedAt: new Date() },
      { name: "Lower Lectin", createdAt: new Date(), updatedAt: new Date() },
      { name: "Lower Salicylate", createdAt: new Date(), updatedAt: new Date() },
      { name: "Lower Fructose", createdAt: new Date(), updatedAt: new Date() },
      { name: "Lower Tyramine", createdAt: new Date(), updatedAt: new Date() },
      { name: "Lower Saturated Fat", createdAt: new Date(), updatedAt: new Date() },
      { name: "Lower Sulfur", createdAt: new Date(), updatedAt: new Date() },
      { name: "Mustard-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Sesame-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Celery-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Atkins", createdAt: new Date(), updatedAt: new Date() },
      { name: "Peanut-Free", createdAt: new Date(), updatedAt: new Date() },
      { name: "Non-Spicy Diet", createdAt: new Date(), updatedAt: new Date() }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Diets', null, {});
  }
};
