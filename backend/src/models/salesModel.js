const connection = require('./connection');

const findAllSalesModel = async () => {
 const [sales] = await connection.execute(`
SELECT sp.sale_id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM sales_products AS sp
    JOIN sales AS s ON sp.sale_id = s.id
    ORDER BY saleId, productId`);
 return sales;
};

const findByIdSalesModel = async (id) => {
  const [sales] = await connection.execute(`
  SELECT S.date, SP.product_id AS productId, SP.quantity
    FROM sales_products AS SP
    JOIN sales AS S ON SP.sale_id = S.id
    WHERE id = ?
    ORDER BY sale_id, productId`, [id]);
  return sales;
};

const postSalesModel = async (sale) => {
  const [{ insertId }] = await connection.execute('INSERT INTO sales () VALUES ();');
  console.log(insertId, sale);

  const mapSale = sale.map(({ productId, quantity }) => {
    console.log(productId, quantity);
   return connection.execute(
'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
   [insertId, productId, quantity],
);  
});

  await Promise.all(mapSale);
  return { id: insertId, itemsSold: sale };
};

module.exports = {
  findAllSalesModel,
  findByIdSalesModel,
  postSalesModel,
};
