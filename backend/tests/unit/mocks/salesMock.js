const sales = [
  {
    date: '2023-09-15T19:36:57.000Z',
    productId: 1,
    quantity: 5,
    saleId: 1,
  },
  {
    date: '2023-09-15T19:36:57.000Z',
    productId: 2,
    quantity: 10,
    saleId: 1,
  },
  {
    date: '2023-09-15T19:36:57.000Z',
    productId: 3,
    quantity: 15,
    saleId: 2,
  },
];
const salesServiceMock = { status: 'SUCCESSFUL', data: sales };
const salesIdServiceMock = { status: 'SUCCESSFUL',
data: {
    date: '2023-09-15T19:36:57.000Z',
    productId: 1,
    quantity: 5,
    saleId: 1,
  } };

const salesServiceNotFoundMock = { status: 'NOT_FOUND', data: { message: 'Sale not found' } };

module.exports = {
  sales,
  salesServiceMock,
  salesServiceNotFoundMock,
  salesIdServiceMock,
};