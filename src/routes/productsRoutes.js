/*********** REQUIRE EXPRESS ********************** */
const express= require('express');
const router = express.Router();

/*********** REQUIRE CONTROLLERS ********************** */
/*********** REQUIRE CONTROLLERS ********************** */
const controller = require('../controllers/productsController')
router.get('/', controller.products);
router.get('/list-products', controller.listProducts);
router.get('/new-product', controller.newProducts);

module.exports = router