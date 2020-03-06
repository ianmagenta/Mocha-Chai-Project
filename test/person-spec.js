const chai = require("chai");
const spies = require("chai-spies");
const Person = require("../problems/person");
const expect = chai.expect;
chai.use(spies);

describe("Person", () => {
    let name = "Seamus";
    let age = 100;
    let otherName = "Ian"
    let otherAge = 101;
    let person;
    let otherPerson;
    beforeEach(() => {
        person = new Person(name, age);
        otherPerson = new Person(otherName, otherAge);
    });

    describe("The Constructor", () => {
        it("should return a person instance", ()=> {
            expect(person).to.be.instanceOf(Person);
        });
        it("should have a name and age", () => {
            expect(person.name).to.be.equal(name);
            expect(person.age).to.be.equal(age);
        });
    });

    describe("sayHello", () => {
        it("returns a string of person's name and greeting message", () => {
            expect(person.sayHello()).to.be.equal("Hello " + name);
        });
    });

    describe("The visit function", () => {
        it("returns a string of person1 visiting person2", () => {
            expect(person.visit(otherPerson)).to.be.equal(`${name} visited ${otherName}`);
        });
    });

    describe("switchVisit", () => {
        it("flips visit", () => {
            expect(otherPerson.switchVisit(person)).to.be.equal(`${name} visited ${otherName}`);
        });
    });

    describe("update person", () => {
        it("should update name and age", () => {
            person.update(otherPerson);
            expect(person).to.be.deep.equal(otherPerson);
        });
        it("should throw TypeError if not an object", () => {
            expect(() => {person.update(1)}).to.throw(TypeError);
        });
        it("should throw TypeError if missing name or age", () => {
            expect(() => {person.update({name: "Seamus"})}).to.throw(TypeError);
            expect(() => { person.update({ age: 100 }) }).to.throw(TypeError);
        })
    });

    describe("tryUpdate", () => {
        it("should return true if sucessfully updated", () => {
            expect(person.tryUpdate(otherPerson)).to.be.true;
        });
        it("should return false if not updated", () => {
            expect(person.tryUpdate({age: 1})).to.be.false;
        });
    });

    describe("greetAll", () => {
        it("should check if sayHello is passed on everybody", () => {
            const helloSpy = chai.spy.on(Person.prototype, "sayHello");
            const people = [person, otherPerson];
            Person.greetAll(people);
            expect(helloSpy).to.be.called.exactly(2);

        });
        it("should check if values were mapped correctly", () => {
            const people = [person, otherPerson];
            expect(Person.greetAll(people)).to.be.deep.equal([`Hello ${name}`, `Hello ${otherName}`]);
        });
    });
});
