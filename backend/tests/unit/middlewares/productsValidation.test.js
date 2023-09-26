const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const productsValidation = require('../../../src/middlewares/productsValidation');

chai.use(sinonChai);

const { expect } = chai;

describe('Middlewares Products tests', function () {
  it('Retorna a mensagem "name is required" se a requisição não tiver o campo `name', async function () {
        const req = { body: { name: '' } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await productsValidation(req, res, sinon.stub());
        expect(res.status.calledWith(400)).to.be.equal(true);
        expect(res.json.calledWith({ message: '"name" is required' })).to.be.equal(true);
  });
    it('Retorna a mensagem "name length must be at least 5 characters long" se a requisição não tiver o campo name', async function () {
        const req = { body: { name: 'lira' } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await productsValidation(req, res, sinon.stub());
        expect(res.status.calledWith(422)).to.be.equal(true);
        expect(res.json.calledWith({ message: '"name" length must be at least 5 characters long' })).to.be.equal(true);
  });
});
