const express = require('express');
const router = express.Router();
const authAdmin= require('../middlewares/authAdmin')
const upload= require('../middlewares/multers/multerProducto')
const registroValidacion = require('../middlewares/validacion/registroUsuarioAdmin');
/** Controller Index */
const controller = require('../controllers/adminController')
router.get('/',authAdmin,controller.adminHome);
router.get('/newproducto',authAdmin,controller.newProducto);
router.post('/nuevo',upload.single('image'),authAdmin,controller.create);
//router.post('/registro',controller.registroProducto);

router.get('/listaUsuarios',authAdmin,controller.listaUsuarios);
router.get('/createUser',authAdmin,controller.createUser);
router.post('/newUser',authAdmin,registroValidacion,controller.newUser);


/** new and create product  */
//router.get('/new-product', controller.newProducts);

/** edit product */
//router.get('/edit/:id',controller.edit); 
//router.patch('/edit/:id', controller.update); 

/** delete product */
//router.delete('/delete/:id',controller.delete)

module.exports = router;
