const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const salesValidation = require('../../../src/middlewares/salesValidation');

chai.use(sinonChai);

const { expect } = chai;

describe('Middlewares Sales tests', function () {
  it('Retorna a mensagem "productId is required" se a requisição não tiver o campo productId', async function () {
        const req = { body: [{ quantity: 1 }] };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await salesValidation(req, res, sinon.stub());
        expect(res.status.calledWith(400)).to.be.equal(true);
        expect(res.json.calledWith({ message: '"productId" is required' })).to.be.equal(true);
  });
    it('Retorna a mensagem "quantity is required" se a requisição não tiver o campo quantity', async function () {
        const req = { body: [{ productId: 1 }] };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await salesValidation(req, res, sinon.stub());
        expect(res.status.calledWith(400)).to.be.equal(true);
        expect(res.json.calledWith({ message: '"quantity" is required' })).to.be.equal(true);
  });
      it('Retorna a mensagem "quantity must be greater than or equal to 1" se o campo `quantity` é menor ou igual a zero', async function () {
        const req = { body: [{ productId: 1, quantity: 0 }] };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        await salesValidation(req, res, sinon.stub());
        expect(res.status.calledWith(422)).to.be.equal(true);
        expect(res.json.calledWith({ message: '"quantity" must be greater than or equal to 1' })).to.be.equal(true);
  });
});