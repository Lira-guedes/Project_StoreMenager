const sinon = require('sinon');
const chai = require('chai');
const connection = require('../../../src/models/connection');
const productsMock = require('../mocks/productsMock');
const productsModel = require('../../../src/models/productsModel');

const { expect } = chai;

describe('Model Products tests', function () {
  it('testa se retorna todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([productsMock]);
    const res = await productsModel.findAllModel();

    expect(res).to.be.an('object');
    expect(res.status).to.be.equal(200);
    expect(res).to.be.deep.equal(productsMock);
  });
    it('testa se retorna todos produtos pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([productsMock]);
    const res = await productsModel.findByIdModel(1);
     
    expect(res).to.be.an('object');
    expect(res.status).to.be.equal(200);
    expect(res).to.be.deep.equal(productsMock[0]);
  });
  afterEach(function () {
    sinon.restore();
  });
});