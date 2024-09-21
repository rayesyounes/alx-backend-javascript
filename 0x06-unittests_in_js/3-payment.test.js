const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("../../alx-backend-javascript-v2/0x06-unittests_in_js/4-payment");
const Utils = require("../../alx-backend-javascript-v2/0x06-unittests_in_js/utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber is stubbed", function() {
	const spy = sinon.spy(console, "log");
	const stub = sinon.stub(Utils, "calculateNumber").returns(10);
	sendPaymentRequestToApi(100, 20);

	assert(spy.withArgs("The total is: 10").calledOnce);
	assert(stub.withArgs("SUM", 100, 20).calledOnce);
    });
});