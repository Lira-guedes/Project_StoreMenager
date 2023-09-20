const connection = require('./connection');

const findAllModel = async () => {
 const [products] = await connection.execute('SELECT * FROM products');
 return products;
};

const findByIdModel = async (id) => {
  const [[products]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return products;
};

module.exports = {
  findAllModel,
  findByIdModel,
};
