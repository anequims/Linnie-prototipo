const express = require('express');
const templatesRouter = express.Router();

templatesRouter.get('/', (req, res) => {
  res.render('templates_page')
})

module.exports = templatesRouter;