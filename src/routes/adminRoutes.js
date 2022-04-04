const express = require('express');
const router = express.Router();
const authAdmin= require('../middlewares/authAdmin')

/** Controller Index */
const controller = require('../controllers/adminController')
router.get('/',authAdmin,controller.adminHome);
router.get('/newproducto',authAdmin,controller.newProducto);

module.exports = router;
