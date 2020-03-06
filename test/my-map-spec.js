const chai = require("chai");
const spies = require("chai-spies");
const myMap = require("../problems/my-map")
const expect = chai.expect;
chai.use(spies);

describe("myMap", () => {
    let someArr;
    let someCb;
    beforeEach(() => {
        someArr = [1, 5, 10];

        someCb = function cb(el) {
            return el * 3;
        }
    });
    context("basic functionality", () => {
        it("should modify each element in the array", () => {
            expect(myMap(someArr, someCb)).to.deep.equal(someArr.map(someCb))
        });
    });
    context("check functionality", () => {
        it("should not mutate the passed in array", () => {
            myMap(someArr, someCb);
            expect(someArr).to.deep.equal([1, 5, 10]);
        });
        it("should not call the built in map function", () => {
            const mapSpy = chai.spy.on(someArr, "map");
            myMap(someArr, someCb);
            expect(mapSpy).to.not.have.been.called();
        })
        it("should invoke the callback once for each element in the passed-in array argument", () => {
            const cbSpy = chai.spy.on(someCb);
            myMap(someArr, cbSpy);
            expect(cbSpy).to.have.been.called.exactly(someArr.length);
        })
    });
})