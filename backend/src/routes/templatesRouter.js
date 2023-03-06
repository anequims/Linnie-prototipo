const express = require('express');
const templatesRouter = express.Router();

templatesRouter.get('/', (req, res) => {
  res.render('templatesPage')
})

module.exports = templatesRouter;