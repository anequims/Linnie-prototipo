const express = require('express');
const exploreRouter = express.Router();

exploreRouter.get('/', (req, res) => {
  res.render('explorePage')
})

module.exports = exploreRouter;