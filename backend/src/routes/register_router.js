
const express = require('express');
const registerRouter = express.Router();

registerRouter.get('/', (req, res) => {
  res.render('register_page')
})

module.exports = registerRouter;