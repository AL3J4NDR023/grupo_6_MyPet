const express= require('express');
const router = express.Router();
const { check } = require('express-validator');

const validations=[
    check('email').isEmail().withMessage('Debe ingresar un email valido'),
    check('password').notEmpty().withMessage('Tienes que escribir una contraseña')
    
  ]


const controller = require('../controllers/userController')

router.get('/register',controller.register);
router.post('/create', controller.create);
router.get('/login', controller.login);
router.post('/login', validations , controller.processLogin);
router.get('/check', function(req,res){
    if(req.session.usuarioLogueado == undefined){
        res.send("No estas logueado");
    }else{
        res.send("El usuario logueado es " + req.session.usuarioLogueado.email);
    }
});

module.exports = router;