const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const productsMock = require('../mocks/productsMock');
const productsController = require('../../../src/controllers/productsController');
const productsService = require('../../../src/services/productsService');

chai.use(sinonChai);

const { expect } = chai;

describe('Controller Products tests', function () {
  it('Retorna status 200 quando encontra produto com sucesso', async function () {
    sinon.stub(productsService, 'findAllService').resolves(productsMock.productsServiceMock);
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productsController.findAllController(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });
    it('Retorna status 200 quando encontra produto pelo id com sucesso', async function () {
    sinon.stub(productsService, 'findByIdService').resolves(productsMock.productsIdServiceMock);
    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productsController.findByIdController(req, res);

    expect(res.status).to.have.been.calledWith(200); 
});
    it('Retorna status 404 quando não encontra produto', async function () {
    sinon.stub(productsService, 'findAllService').resolves(productsMock.productsServiceNotFoundMock);
    const req = { params: { id: 99 } };
     const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productsController.findAllController(req, res);

    expect(res.status).to.have.been.calledWith(404);
});
    it('Testa o método delete', async function () {
      sinon.stub(productsService, 'deleteProductsService').resolves({ status: 'DELETED' });
      const req = { params: { id: 1 } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };
      await productsController.deleteProducts(req, res);
      expect(res.status).to.have.been.calledWith(204);
    });
  afterEach(function () {
    sinon.restore();
  });
});