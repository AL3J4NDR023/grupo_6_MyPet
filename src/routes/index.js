var express = require('express');
var router = express.Router();


/** Controller Index */
const controller = require('../controllers/indexController')
router.get('/',controller.home);

router.get('/producto/detalle/:id',controller.detalle);

module.exports = router;
