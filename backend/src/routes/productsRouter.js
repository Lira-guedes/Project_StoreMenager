const express = require('express');

const productsController = require('../controllers/productsController');
const productsValidation = require('../middlewares/productsValidation');

const router = express.Router();

router.get('/', productsController.findAllController);
router.get('/:id', productsController.findByIdController);
router.post('/', productsValidation, productsController.postProducts);
router.delete('/:id', productsController.deleteProducts);

module.exports = router;