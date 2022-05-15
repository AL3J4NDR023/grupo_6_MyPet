const express= require('express');
const router=express.Router();
const productApiController= require('../../controllers/api/productApiController')

router.get('/',productApiController.listaProductos);
router.get('/:id',productApiController.detalleProducto);


module.exports=router;