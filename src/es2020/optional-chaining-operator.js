let person = {
	name: 'Heliandro',
	documents: {},
	sayHello: () => this.name + ' : Hello!'
}

console.log( person?.sayHello() ); // Heliandro: Hello!

// BAD - ERROR..but what's? you are invoke the inexistent funcion
// console.log( person?.walk() );

// GOOD
console.log( person?.walk?.() ); // undefined

// GOOD
console.log(`person.documents.cpf = ${ person?.documents?.cpf }`); // undefined

// GOOD | chaining operator with coalescing operator
console.log(`person.documents.cpf = ${ person?.documents?.cpf ?? '000.000.000-00' }`); // '000.000.000-00'
