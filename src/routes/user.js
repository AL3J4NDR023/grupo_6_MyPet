var express = require('express');
var router = express.Router();
const controller = require('../controllers/userController')

// renderizar y procesar login
router.get('/login', controller.login);
//router.post('/login', loginValidation, processLogin);

// renderizar y procesar register
router.get('/registro', controller.registro);
//router.post('/register', registerValidation, processRegister);

//router.get('/profile', profile);
//uploadImages debe coincidir con el nombre del middleware

// cerrar sesión
//router.get('/logout', processLogout);

module.exports = router;
