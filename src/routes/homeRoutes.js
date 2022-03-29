/*********** REQUIRE EXPRESS ********************** */
const express= require('express');
//const { check } = require('express-validator');
const router = express.Router();

//const validations=[
    //check('email').isEmail().withMessage('Debe ingresar un email valido'),
  //  check('password').notEmpty().withMessage('Tienes que escribir una contraseña')
    
//]
/*********** REQUIRE CONTROLLERS ********************** */
const controller = require('../controllers/homeController')
router.get('/', controller.home);
router.get('/producto/detalle/:id',controller.detalle);
//router.get('/login', controller.login);
//router.post('/login', validations , controller.processLogin);
//router.get('/register', controller.register);
router.get('/carrito',controller.carrito);

module.exports = router