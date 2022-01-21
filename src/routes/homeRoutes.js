/*********** REQUIRE EXPRESS ********************** */
const express= require('express');
const router = express.Router();

/*********** REQUIRE CONTROLLERS ********************** */
const controller = require('../controllers/homeController')
router.get('/', controller.home);

module.exports = router