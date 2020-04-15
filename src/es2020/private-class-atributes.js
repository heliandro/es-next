class Person {
	#name; // private atribute

	constructor(name) { this.#name = name; }
	get name() { return this.#name; }
}

const person = new Person('Heliandro');

// GOOD - use getter
console.log(person.name);

// BAD - Cause error. I can't access private atributes.
console.log(person.#name);
