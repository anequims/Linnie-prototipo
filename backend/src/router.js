const express = require('express');

const router = express.Router();

//Rotas separadas em arquivos distintos para melhor visualização
const homeRouter = require('./routes/home_router');
const exploreRouter = require('./routes/explore_router');
const signinRouter = require('./routes/signin_router');
const signupRouter = require('./routes/signup_router');
const skirRouter = require('./routes/skirt_router');
const templatesRouter = require('./routes/templates_router');
const userRouter = require('./routes/user_router');
const userEditRouter = require('./routes/useredit_router');

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