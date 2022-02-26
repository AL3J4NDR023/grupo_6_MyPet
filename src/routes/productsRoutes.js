/*********** REQUIRE EXPRESS ********************** */
const express= require('express');
const router = express.Router();

/*********** REQUIRE CONTROLLERS ********************** */
/*********** REQUIRE CONTROLLERS ********************** */
const controller = require('../controllers/productsController')
router.get('/', controller.products);
router.get('/detail/:id', controller.detail);
router.get('/list-products', controller.listProducts);

/** new and create product  */
router.get('/new-product', controller.newProducts);
router.post('/create', controller.create);

/** edit product */
router.get('/edit/:id',controller.edit); 
router.patch('/edit/:id', controller.update); 

/** delete product */
router.delete('/delete/:id',controller.delete)
module.exports = router