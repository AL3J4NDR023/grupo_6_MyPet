/*********** REQUIRE EXPRESS ********************** */
const express= require('express');
const router = express.Router();

/*********** REQUIRE CONTROLLERS ********************** */
/*********** REQUIRE CONTROLLERS ********************** */
const controller = require('../controllers/productsController')
router.get('/', controller.products);

module.exports = router