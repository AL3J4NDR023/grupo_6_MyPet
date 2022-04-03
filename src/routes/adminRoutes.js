var express = require('express');
var router = express.Router();


/** Controller Index */
const controller = require('../controllers/adminController')
router.get('/',controller.adminHome);
router.get('/newproducto',controller.newProducto);

module.exports = router;
