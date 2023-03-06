const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
  res.render('homePage')
})

module.exports = homeRouter;