const sinon = require('sinon');
const chai = require('chai');
const { productsMock } = require('../mocks/productsMock');
const productsController = require('../../../src/controllers/productsController');

const { expect } = chai;

describe('Controller Products tests', function () {
  it('Retorna status 200 quando encontra produto com sucesso', async function () {
    sinon.stub(productsController, 'findAllController').resolves([productsMock]);
    const res = await productsController.findAllController();

    expect(res.status).to.have.been.calledWith(200);
  });
    it('Retorna status 200 quando encontra produto pelo id com sucesso', async function () {
    sinon.stub(productsController, 'findAllController').resolves([productsMock]);
    const res = await productsController.findAllController(1);

    expect(res.status).to.have.been.calledWith(200); 
});
    it('Retorna status 404 quando não encontra produto', async function () {
    sinon.stub(productsController, 'findAllController').resolves([productsMock]);
    const res = await productsController.findAllController();

    expect(res.status).to.have.been.calledWith(200); 
});
  afterEach(function () {
    sinon.restore();
  });
});