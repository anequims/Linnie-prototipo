const express = require('express');
const skirtRouter = express.Router();

skirtRouter.get('/', (req, res) => {
  res.render('skirtPage')
})

module.exports = skirtRouter;