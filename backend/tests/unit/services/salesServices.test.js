const sinon = require('sinon');
const chai = require('chai');
const salesMock = require('../mocks/salesMock');
const salesService = require('../../../src/services/salesService');
const salesModel = require('../../../src/models/salesModel');

const { expect } = chai;

describe('Service Sales tests', function () {
  it('Retorna venda com sucesso', async function () {
    sinon.stub(salesModel, 'findAllSalesModel').resolves(salesMock.sales);
    const res = await salesService.findAllSalesService();

    expect(res).to.be.deep.equal(salesMock.salesServiceMock);
  });
    it('Retorna venda pelo id com sucesso', async function () {
    sinon.stub(salesModel, 'findByIdSalesModel').resolves(salesMock.sales[0]);
    const res = await salesService.findByIdSalesService(1);

    expect(res).to.be.deep.equal(salesMock.salesIdServiceMock);
  });
    it('Retorna venda pelo id sem sucesso', async function () {
    sinon.stub(salesModel, 'findByIdSalesModel').resolves(undefined);
    const res = await salesService.findByIdSalesService(99);

    expect(res).to.be.deep.equal({ status: 'NOT_FOUND', data: { message: 'Sale not found' } });
  });
  afterEach(function () {
    sinon.restore();
  });
});
