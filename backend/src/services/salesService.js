const salesModel = require('../models/salesModel');
const productsModel = require('../models/productsModel');

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
  const products = sale.map(({ productId }) => productsModel.findByIdModel(productId));
  const productNotFound = (await Promise.all(products)).some((product) => !product);

   if (productNotFound) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
    const sales = await salesModel.postSalesModel(sale);
    return { status: 'CREATED', data: sales };
};

module.exports = {
  findAllSalesService,
  findByIdSalesService,
  postNewSales,
};
