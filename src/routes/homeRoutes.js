/*********** REQUIRE EXPRESS ********************** */
const express= require('express');
const { check } = require('express-validator');
const router = express.Router();

/*********** REQUIRE CONTROLLERS ********************** */
const controller = require('../controllers/homeController')
router.get('/', controller.home);
router.get('/login', controller.login);
router.post('/login', [
    check('email').isEmail().withMessage('Debe ingresar un email valido'),
    check('password').notEmpty().withMessage('Tienes que escribir una contraseña')
], controller.processLogin);
router.get('/register', controller.register);
router.get('/carrito',controller.carrito);

module.exports = router