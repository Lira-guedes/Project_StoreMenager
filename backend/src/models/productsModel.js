const connection = require('./connection');

const findAllModel = async () => {
 const [products] = await connection.execute('SELECT * FROM products');
 return products;
};

const findByIdModel = async (id) => {
  const [[products]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return products;
};

const postProductsModel = async (name) => {
  const [product] = await connection.execute('INSERT INTO products (name) VALUES (?)', [name]);
  return { id: product.insertId, name };
};

const deleteProductsModel = async (id) => {
 await connection.execute('DELETE FROM products WHERE id = (?)', [id]);
};

module.exports = {
  findAllModel,
  findByIdModel,
  postProductsModel,
  deleteProductsModel,
};
