const productsModel = require('../models/productsModel');

const findAllService = async () => {
  const products = await productsModel.findAllModel();
  return { status: 'SUCCESSFUL', data: products };
};

const findByIdService = async (id) => {
  const products = await productsModel.findByIdModel(id);
  if (!products) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESSFUL', data: products };
};

module.exports = {
  findAllService,
  findByIdService,
};
