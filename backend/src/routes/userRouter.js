const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.render('userPage')
})

module.exports = userRouter;