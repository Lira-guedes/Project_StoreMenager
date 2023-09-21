const express = require('express');

const salesController = require('../controllers/salesController');

const router = express.Router();

router.get('/', salesController.findAllSalesController);
router.get('/:id', salesController.findByIdSalesController);
router.post('/', salesController.postSales);

module.exports = router;