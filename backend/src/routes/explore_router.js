const express = require('express');
const exploreRouter = express.Router();

exploreRouter.get('/', (req, res) => {
  res.render('explore_page')
})

module.exports = exploreRouter;