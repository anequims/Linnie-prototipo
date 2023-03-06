const express = require('express');

const router = express.Router();

//Rotas separadas em arquivos distintos para melhor visualização
const homeRouter = require('./routes/homeRouter');
const exploreRouter = require('./routes/exploreRouter');
const signinRouter = require('./routes/signinRouter');
const signupRouter = require('./routes/signupRouter');
const skirRouter = require('./routes/skirtRouter');
const templatesRouter = require('./routes/templatesRouter');
const userRouter = require('./routes/userRouter');
const userEditRouter = require('./routes/userEditRouter');

router.use(express.static('public'))

router.use('/', homeRouter);
router.use('/explorePage', exploreRouter);
router.use('/signinPage', signinRouter);
router.use('/signupPage', signupRouter);
router.use('/skirtPage', skirRouter);
router.use('/templatesPage', templatesRouter);
router.use('/userPage', userRouter);
router.use('/userEditPage', userEditRouter);
  

module.exports = router;  