/*
* Nullish Coalescing Operator - the new operator (??) is intended to handle default values.
*
* Unlike operators like && and || that use the definition of "truthy", this operator
* uses the definition of "nullish" (compares with strictly "null" or "undefined" values)
*
* Values false, 0, NaN and '' are all falsy values that are not nullish. The new operator is a good
*  option to resolve these cases.
*
* */

console.info('\nOR Operator:');

// OR Operator
console.info( false || true ) // true
console.info( 0 || 1 ) // 1
console.info( null || {} ) // true
console.info( undefined || [] ) // []
console.info( '' || 'default' ) // 'default'

console.info('\nNullish Coalescing Operator:');

// Nullish Coalescing Operator
console.info( false ?? true ) // false
console.info( 0 ?? 1 ) // 0
console.info( null ?? {} ) // {}
console.info( undefined ?? [] ) // []
console.info( '' ?? 'default' ) // ''
