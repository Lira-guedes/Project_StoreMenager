const sinon = require('sinon');
const chai = require('chai');
const productsMock = require('../mocks/productsMock');
const productsService = require('../../../src/services/productsService');
const productsModel = require('../../../src/models/productsModel');

const { expect } = chai;

describe('Service Products tests', function () {
  it('Retorna produto com sucesso', async function () {
    sinon.stub(productsModel, 'findAllModel').resolves(productsMock.products);
    const res = await productsService.findAllService();

    expect(res).to.be.deep.equal(productsMock.productsServiceMock);
  });
    it('Retorna produto pelo id com sucesso', async function () {
    sinon.stub(productsModel, 'findByIdModel').resolves(productsMock.products[0]);
    const res = await productsService.findByIdService(1);

    expect(res).to.be.deep.equal(productsMock.productsIdServiceMock);
  });
    it('Retorna produto pelo id sem sucesso', async function () {
    sinon.stub(productsModel, 'findByIdModel').resolves(undefined);
    const res = await productsService.findByIdService(99);

    expect(res).to.be.deep.equal({ status: 'NOT_FOUND', data: { message: 'Product not found' } });
  });
  afterEach(function () {
    sinon.restore();
  });
});
