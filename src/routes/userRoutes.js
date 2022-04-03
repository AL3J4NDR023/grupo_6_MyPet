const express= require('express');
const router = express.Router();
const multer= require('multer')
const controller = require('../controllers/userController')
const loginValidacion = require('../validacion/loginValidacion');
const registroValidacion = require('../validacion/registroValidacion');

const upload= require('../multers/multerUser')

router.get('/login', controller.login);
router.post('/login', loginValidacion, controller.procesoLogin);

// renderizar y procesar register
router.get('/registro', controller.registro);
router.post('/register', upload.single('fileUser'), controller.procesoRegistro);


module.exports = router;