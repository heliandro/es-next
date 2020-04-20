/*
* Optional Chaining Operator - this operator intent to resolve long chains of property access with nullish (null or undefined) values.
* See the checking for property existence in the following examples.
* */

let person = {};

// ** Examples without new operator:

// Checking for property existence on each step.
let cpfLength;
if (person && person.documents && person.documents.cpf) {
	cpfLegth = person.documents.cpf.length;
}
console.info(cpfLength); // undefined

// with ternary operator..very confusing.
console.info(
	person
		? person.documents
			? person.documents.cpf
				? person.documents.cpf.length
				: undefined
			: undefined
		: undefined
); // undefined

// ** Examples with optional chaining operator:

// Checking for property existence on each step.
console.info( person?.documents?.cpf?.length ); // undefined

// Chaining operator with coalescing operator
console.info( person?.documents?.cpf ?? '000.000.000-00' ); // '000.000.000-00'

