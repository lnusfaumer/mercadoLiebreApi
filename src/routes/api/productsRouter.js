// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
let productsController = require('../../controllers/api/productsController');

router.get('/api/products/latest' , productsController.latest); /* GET - latest */
router.get('/api/products/offers', productsController.offers); /* GET - offers */

module.exports = router;