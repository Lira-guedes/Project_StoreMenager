const sinon = require('sinon');
const chai = require('chai');
const { productsMock } = require('../mocks/productsMock');
const productsService = require('../../../src/services/productsService');

const { expect } = chai;

describe('Service Products tests', function () {
  it('Retorna produto com sucesso', async function () {
    sinon.stub(productsService, 'findAllService').resolves([productsMock]);
    const res = await productsService.findAllService();

    expect(res.length).to.equal(3);
    expect(res).to.be.deep.equal({ status: 'SUCCESSFUL', data: res });
  });
    it('Retorna produto pelo id com sucesso', async function () {
    sinon.stub(productsService, 'findByIdService').resolves([productsMock]);
    const res = await productsService.findByIdService(1);

    expect(res).to.be.deep.equal({ status: 'SUCCESSFUL', data: res });
  });
    it('Retorna produto pelo id sem sucesso', async function () {
    sinon.stub(productsService, 'findByIdService').resolves([productsMock]);
    const res = await productsService.findByIdService(99);

    expect(res).to.be.deep.equal({ status: 'NOT_FOUND', data: { message: 'Product not found' } });
  });
  afterEach(function () {
    sinon.restore();
  });
});
