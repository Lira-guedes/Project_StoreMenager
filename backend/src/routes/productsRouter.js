const express = require('express');

const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.findAllController);
router.get('/:id', productsController.findByIdController);

module.exports = router;