const express= require('express');
const router=express.Router();
const userApiController= require('../../controllers/api/userApiController')

router.get('/',userApiController.listaUsuarios);
router.get('/:id',userApiController.detalleUsuario);


module.exports=router;