const sinon = require('sinon');
const chai = require('chai');
const connection = require('../../../src/models/connection');
const productsMock = require('../mocks/productsMock');
const productsModel = require('../../../src/models/productsModel');

const { expect } = chai;

describe('Model Products tests', function () {
  it('Testa se retorna todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([productsMock.products]);
    const res = await productsModel.findAllModel();

    expect(res).to.be.an('array');
    expect(res).to.be.deep.equal(productsMock.products);
  });
  it('Testa se retorna todos produtos pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([productsMock.products]);
    const res = await productsModel.findByIdModel(1);

    expect(res).to.be.an('object');
    expect(res).to.be.deep.equal(productsMock.products[0]);
  });
  afterEach(function () {
    sinon.restore();
  });
});