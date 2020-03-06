const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
const reverseString = require("../problems/reverse-string.js")

describe("reverseString", () => {
    it("should return a reversed string", () => {
        expect(reverseString("fun")).to.equal("nuf");
    });
    it("should throw type error when given a non-string value", () => {
        expect(() => reverseString(1)).to.throw(TypeError);
        expect(() => reverseString([])).to.throw(TypeError);
        expect(() => reverseString({})).to.throw(TypeError);
    })
});