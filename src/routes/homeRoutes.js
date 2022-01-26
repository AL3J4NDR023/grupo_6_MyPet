/*********** REQUIRE EXPRESS ********************** */
const express= require('express');
const router = express.Router();

/*********** REQUIRE CONTROLLERS ********************** */
const controller = require('../controllers/homeController')
router.get('/', controller.home);
router.get('/login', controller.login);
router.get('/register', controller.register);
router.get('/carrito',controller.carrito);
module.exports = router