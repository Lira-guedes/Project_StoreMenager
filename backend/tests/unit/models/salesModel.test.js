const sinon = require('sinon');
const chai = require('chai');
const connection = require('../../../src/models/connection');
const salesMock = require('../mocks/salesMock');
const salesModel = require('../../../src/models/salesModel');

const { expect } = chai;

describe('Model Sales tests', function () {
  it('Testa se retorna todas as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([salesMock.sales]);
    const res = await salesModel.findAllSalesModel();

    expect(res).to.be.an('array');
    expect(res).to.be.deep.equal(salesMock.sales);
  });
  it('Testa se retorna todas as vendas por id', async function () {
    sinon.stub(connection, 'execute').resolves([salesMock.sales]);
    const res = await salesModel.findByIdSalesModel(1);
     
    expect(res).to.be.an('array');
    expect(res).to.be.deep.equal(salesMock.sales);
  });
  afterEach(function () {
    sinon.restore();
  });
});