var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././/middleware/auth');

router.get('/', controllers.homeController.index);
router.get('/auth/signup',AuthMiddleware.isLogged, controllers.userController.getSignUp);
router.post('/auth/signup', controllers.userController. postSignUp);
router.get('/auth/signin',AuthMiddleware.isLogged, controllers.userController.getSignIn);
router.post('/auth/signin', passport.authenticate('local',{
    successRedirect:'/users/panel',
    failureRedirect: '/auth/signin',
    failureFlash: true
}));
router.get('/auth/logout', controllers.userController.logout);
router.get('/users/panel',AuthMiddleware.isLogged, controllers.userController.getUserPanel)
router.get('/users/showUser',AuthMiddleware.isLogged, controllers.userController.getShowUser)
router.get('/users/showUser',AuthMiddleware.isLogged, controllers.userController.getShowUser)
router.get('/users/showTable', controllers.userController.getTable)
router.get('/users/showGrafic',AuthMiddleware.isLogged, controllers.userController.getGrafic)
router.get('/users/showGrafic1', controllers.userController.getGrafic1)
router.get('/users/user',AuthMiddleware.isLogged, controllers.userController.getUser)


module.exports = router;
