const express = require('express');

const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.findAllController);
router.get('/:id', productsController.findByIdController);
router.post('/', productsController.postProducts);

module.exports = router;