const express = require('express');
const userEditRouter = express.Router();

userEditRouter.get('/', (req, res) => {
  res.render('useredit_page')
})

module.exports = userEditRouter;