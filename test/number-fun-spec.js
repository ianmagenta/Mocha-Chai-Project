const assert = require('assert');
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe("returnsThree", () => {
    it("returns the number 3", () => {
        assert.equal(returnsThree(), 3);
    });
});

describe("reciprocal", () => {
    context("recieves the correct number", () => {
        it("returns the reciprocal number", () => {
        assert.strictEqual(reciprocal(5), 0.2);
        assert.strictEqual(reciprocal(4), 0.25);
        assert.strictEqual(reciprocal(2), 0.5);
        });
    });
    context("recieved incorrect number", () => {
        it("if less than one", () => {
            assert.throws(() => reciprocal(0), TypeError);
        });
        it("if over a million", () => {
            assert.throws(() => reciprocal(1000001), TypeError);
        });
    });
});