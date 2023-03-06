const express = require('express');
const userEditRouter = express.Router();

userEditRouter.get('/', (req, res) => {
  res.render('userEditPage')
})

module.exports = userEditRouter;