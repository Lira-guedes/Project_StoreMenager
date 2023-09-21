const salesModel = require('../models/salesModel');

const findAllSalesService = async () => {
  const sale = await salesModel.findAllSalesModel();
  return { status: 'SUCCESSFUL', data: sale };
};

const findByIdSalesService = async (id) => {
  const sale = await salesModel.findByIdSalesModel(id);
  if (sale.length === 0) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  return { status: 'SUCCESSFUL', data: sale };
};

const postNewSales = (name) => salesModel.postSalesModel(name);

module.exports = {
  findAllSalesService,
  findByIdSalesService,
  postNewSales,
};
