const express = require('express');
const router = express.Router();
const authAdmin= require('../middlewares/authAdmin')
const uploadProduct= require('../middlewares/multers/multerProducto')
const uploadUser= require('../middlewares/multers/multerUser')

const registroValidacion = require('../middlewares/validacion/registroUsuarioAdmin');
/** Controller Index */
const controller = require('../controllers/adminController');
router.get('/',authAdmin,controller.adminHome);
router.get('/newproducto',authAdmin,controller.newProducto);
router.post('/nuevo',uploadProduct.single('image'),authAdmin,controller.create);
//router.post('/registro',controller.registroProducto);
router.get('/editarproducto/:id',authAdmin,controller.editarproducto);
router.post('/editarproducto/:id',uploadProduct.single('image'),authAdmin,controller.updateproducto);
router.delete('/deleteproducto/:id',authAdmin,controller.deleteproducto);

router.get('/listaUsuarios',authAdmin,controller.listaUsuarios);
router.get('/createUser',authAdmin,controller.createUser);
router.post('/newUser',authAdmin,registroValidacion,controller.newUser);
router.get('/editarusuario/:id',authAdmin,controller.editarusuario);
router.put('/editarusuario/:id',uploadUser.single('image'),authAdmin,controller.updateusuario);
router.delete('/deleteusuario/:id',authAdmin,controller.deleteusuario);


module.exports = router;
