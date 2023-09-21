const productsService = require('../services/productsService');
const statusHTTP = require('../utils/httpStatusMap');

const findAllController = async (_req, res) => {
 const { status, data } = await productsService.findAllService();
 return res.status(statusHTTP(status)).json(data);
};

const findByIdController = async (req, res) => {
 const { id } = req.params;
  const { status, data } = await productsService.findByIdService(id);
  return res.status(statusHTTP(status)).json(data);
};

const postProducts = async (req, res) => {
  const { name } = req.body;
  const data = await productsService.postNewProducts(name);
  return res.status(201).json(data);
};

module.exports = {
  findAllController,
  findByIdController,
  postProducts,
};
