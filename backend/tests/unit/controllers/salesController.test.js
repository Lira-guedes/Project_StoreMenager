const sinon = require('sinon');
const chai = require('chai');
const salesMock = require('../mocks/salesMock');
const salesController = require('../../../src/controllers/salesController');
const salesService = require('../../../src/services/salesService');

const { expect } = chai;

describe('Controller Sales tests', function () {
  it('Retorna status 200 quando encontra venda com sucesso', async function () {
    sinon.stub(salesService, 'findAllSalesService').resolves(salesMock.salesServiceMock);
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await salesController.findAllSalesController(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });
    it('Retorna status 200 quando encontra venda pelo id com sucesso', async function () {
    sinon.stub(salesService, 'findByIdSalesService').resolves(salesMock.salesServiceMock);
    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await salesController.findByIdSalesController(req, res);

    expect(res.status).to.have.been.calledWith(200);
});
    it('Retorna status 404 quando não encontra venda', async function () {
    sinon.stub(salesService, 'findAllSalesService').resolves(salesMock.salesServiceNotFoundMock);
    const req = { params: { id: 99 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await salesController.findAllSalesController(req, res);

    expect(res.status).to.have.been.calledWith(404); 
});
  afterEach(function () {
    sinon.restore();
  });
});