const salesService = require('../services/salesService');
const statusHTTP = require('../utils/httpStatusMap');

const findAllSalesController = async (_req, res) => {
 const { status, data } = await salesService.findAllSalesService();
 return res.status(statusHTTP(status)).json(data);
};

const findByIdSalesController = async (req, res) => {
 const { id } = req.params;
  const { status, data } = await salesService.findByIdSalesService(id);
  return res.status(statusHTTP(status)).json(data);
};

const postSales = async (req, res) => {
  const { name } = req.body;
  const data = await salesService.postNewSales(name);
  return res.status(201).json(data);
};

module.exports = {
  findAllSalesController,
  findByIdSalesController,
  postSales,
};
