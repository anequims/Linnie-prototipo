const express = require('express');
const signinRouter = express.Router();

signinRouter.get('/', (req, res) => {
  res.render('signinPage')
})

module.exports = signinRouter;