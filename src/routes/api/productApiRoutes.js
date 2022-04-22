const express = require('express');
const router = express.Router();
const productApiController = require('../../controllers/api/productApiController');

//Rutas
//Listado de películas
router.get('/', productApiController.list);
//Detalle de una película
router.get('/:id', productApiController.detail);

//Agregar una producto
router.post('/create', productApiController.create);
//Modificar una película
//router.put('/update/:id', productApiController.update);
//Eliminar una película
//router.delete('/delete/:id', productApiController.destroy);

module.exports = router;