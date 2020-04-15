// INTEGER
const max = Number.MAX_SAFE_INTEGER;
console.log( max ); // 9007199254740991

console.log( max + 1); // 9007199254740992
console.log( max + 2); // 9007199254740992 ... limit of integer

// BIG INT
const numberBigInt = BigInt(max);
console.log( numberBigInt + 2n ); // 9007199254740993 => pass the limit of previous result of (max + 2)!

// BAD
// console.log( numberBigInt * 100 ); // Error. Multiplies the Big Int and not for Integer.

// GOOD | add 'n' after number.
console.log( numberBigInt * 100n );
