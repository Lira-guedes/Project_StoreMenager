const products = [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
    {
      id: 3,
      name: 'Escudo do CapitÃ£o AmÃ©rica',
    },
  ];
const productsServiceMock = { status: 'SUCCESSFUL', data: products };
const productsIdServiceMock = { status: 'SUCCESSFUL',
data: {
      id: 1,
      name: 'Martelo de Thor',
    } };
const productsServiceNotFoundMock = { status: 'NOT_FOUND', data: { message: 'Product not found' } };

module.exports = {
  products,
  productsServiceMock,
  productsServiceNotFoundMock,
  productsIdServiceMock,
};