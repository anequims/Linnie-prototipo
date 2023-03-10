const express = require('express');

const router = express.Router();

//Rotas separadas em arquivos distintos para melhor visualização
const homeRouter = require('./routes/home_router');
const exploreRouter = require('./routes/explore_router');
const loginRouter = require('./routes/login_router');
const registerRouter = require('./routes/register_router');
const skirRouter = require('./routes/skirt_router');
const templatesRouter = require('./routes/templates_router');
const userRouter = require('./routes/user_router');
const userEditRouter = require('./routes/useredit_router');

router.use(express.static('public'))

router.use('/', homeRouter);
router.use('/explore_page', exploreRouter);
router.use('/login_page', loginRouter);
router.use('/register_page', registerRouter);
router.use('/skirt_page', skirRouter);
router.use('/templates_page', templatesRouter);
router.use('/user_page', userRouter);
router.use('/useredit_page', userEditRouter);
  

module.exports = router;  