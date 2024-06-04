const express = require('express');
const router = express.Router();
const extractEntities = require('../utils/extractEntities');

router.get('/extract', async (req, res) => {
  const searchTerm = req.query.searchTerm;
  if (!searchTerm) {
    return res.status(400).json({ error: 'searchTerm query parameter is required' });
  }

  try {
    const entities = await extractEntities(searchTerm);
    res.json(entities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
