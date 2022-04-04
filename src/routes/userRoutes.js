const express= require('express');
const router = express.Router();
const multer= require('multer')
const controller = require('../controllers/userController')
const loginValidacion = require('../middlewares/validacion/loginValidacion');
const registroValidacion = require('../middlewares/validacion/registroValidacion');
const userLogin = require('../middlewares/userLogin')
const upload= require('../middlewares/multers/multerUser')

router.get('/login',userLogin, controller.login);
router.post('/processlogin',  controller.procesoLogin);

// renderizar y procesar register
router.get('/registro',userLogin, controller.registro);
router.post('/register', upload.single('fileUser'), registroValidacion, controller.procesoRegistro);
router.get('/logout',controller.logout);

module.exports = router;