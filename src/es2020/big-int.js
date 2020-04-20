/*
* BigInt - is the new numeric primitive that can represents integers with arbitrary precision. Now
* you can safely operate large integers even beyond the safe integer limit.
*
* To create a BigInt, add the "n" suffix to an integer number.
* */

// INTEGER
const max = Number.MAX_SAFE_INTEGER;
console.log( max ); // 9007199254740991

console.log( max + 1); // 9007199254740992
console.log( max + 2); // 9007199254740992 ... integer limit!

// BIG INT
const numberBigInt = BigInt(max);
console.log( numberBigInt + 2n ); // 9007199254740993n => exceeds the limit of the previous result: (max + 2)!

// BAD
console.log( numberBigInt * 100 ); // Error. Multiplies by BigInt type and not by Integer.

// GOOD | add "n" suffix.
console.log( numberBigInt * 100n ); // 900719925474099100n
