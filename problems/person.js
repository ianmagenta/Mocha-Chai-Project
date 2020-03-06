class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hello ${this.name}`;
    }

    visit(otherPerson) {
        return `${this.name} visited ${otherPerson.name}`;
    }

    switchVisit(otherPerson) {
        return otherPerson.visit(this);
    }

    update(obj) {
        if (typeof obj !== "object") {
            throw new TypeError("This argument must be an object");
        } else {
            if (!obj.age || !obj.name) {
                throw new TypeError("Missing name or age");
            } else {
                this.name = obj.name;
                this.age = obj.age;
            }
        }
    }

    tryUpdate(obj) {
        try {
            this.update(obj);
        } catch(error) {
            return false;
        }
        return true;
    }

    static greetAll(people) {
        let greetPeople = people.map(person => person.sayHello());
        return greetPeople;
    }
}

module.exports = Person;