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

const postNewSales = async (sale) => {
  try {
    const sales = await salesModel.postSalesModel(sale);
    return { status: 'CREATED', data: sales };
  } catch (error) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
};

module.exports = {
  findAllSalesService,
  findByIdSalesService,
  postNewSales,
};
