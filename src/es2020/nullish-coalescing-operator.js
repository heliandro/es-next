let person = {
	name: null,
	age: null
};

// Nullish coalescing operator
console.log(`Person name is: ${ person.name ?? 'unknown' }`); // 'unknown'
console.log(`\n${person.name} age is: ${ person.age ?? 'no age' }`); // 'no age'
// OR Operator
console.log(`Person name is: ${ person.name || 'unknown' }`); // 'unknown'
console.log(`${person.name} age is: ${ person.age || 'no age' }`); // 'no age'

person.name = '';
person.age = 0;
// Nullish coalescing operator
console.log(`\nPerson name is: ${ person.name ?? 'unknown' }`); // ''
console.log(`\n${person.name} age is: ${ person.age ?? 'no age' }`); // 0
// OR operator
console.log(`Person name is: ${ person.name || 'unknown' }`); // 'unknown'
console.log(`${person.name} age is: ${ person.age || 'no age' }`); // 'no age'

person.name = 'Heliandro';
person.age = 1;
// Nullish coalescing operator
console.log(`\nPerson name is: ${ person.name ?? 'unknown' }`); // 'Heliandro'
console.log(`\n${person.name} age is: ${ person.age ?? 'no age' }`); // 1
// OR operator
console.log(`Person name is: ${ person.name || 'unknown' }`); // 'Heliandro'
console.log(`${person.name} age is: ${ person.age || 'no age' }`); // 1







