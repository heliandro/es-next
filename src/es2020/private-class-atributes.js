/*
* Private class attributes - No need for introductions. Use the # prefix before the attribute name.
* */

class Person {
	#name; // private attribute

	constructor(name) { this.#name = name; }
	get name() { return this.#name; }
}

const person = new Person('Heliandro');

// GOOD - using the getter
console.info( person.name );

// BAD - causes an error. You cannot access private attributes
console.info( person.#name );
