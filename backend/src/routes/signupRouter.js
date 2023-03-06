
const express = require('express');
const signupRouter = express.Router();

signupRouter.get('/', (req, res) => {
  res.render('signupPage')
})

module.exports = signupRouter;