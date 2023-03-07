const express = require('express');
const skirtRouter = express.Router();

skirtRouter.get('/', (req, res) => {
  res.render('skirt_page')
})

module.exports = skirtRouter;