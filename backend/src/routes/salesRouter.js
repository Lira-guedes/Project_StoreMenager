const express = require('express');

const salesController = require('../controllers/salesController');
const salesValidation = require('../middlewares/salesValidation');

const router = express.Router();

router.get('/', salesController.findAllSalesController);
router.get('/:id', salesController.findByIdSalesController);
router.post('/', salesValidation, salesController.postSales);

module.exports = router;