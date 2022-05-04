var a = 100;
var b = 10;
var c = "10";

// Arithmetic operators combine with numbers to form an expression that returns a single number
console.log(a + b);//110
console.log(a - b);//90
console.log(a / b);//10
console.log(a * b);//1000

// Modulus returns the remainder between two numbers.  
console.log(a % b);//0
// Comparison operators combine with strings, booleans and numbers to form an expression that evaluates to true or false
// Compares equality
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality

console.log(b == c);//true
console.log(b != c);//false

// Compares equality and type (strict equality)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
console.log(b === c);//false
console.log(b !== c);//true

// Greater than or less than
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than
console.log(a > b);//true
console.log(a < b);//false

// String Values: To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
//In other words, strings are compared letter-by-letter.
//https://javascript.info/comparison#string-comparison
console.log("a" >= "b");     // false
console.log("a" >= "a");     // true
console.log("a" >= "3");     // true
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Glaw' > 'Glee' ); // 'a' is not greater than 'e' false
console.log( 'Bee' > 'Be' ); // true


// Protip You should always compare number with number and string with string.

// Greater than or equal to and less than or equal to
console.log(a <= b);//false
console.log(a >= b);//true

// Logical operators take in two or more expressions and return true or false 
var expression1 = (b == c);//true
var expression2 = (a > b);//true

// Evaluates to true if expression1 AND expression2 are both true, otherwise false

console.log(expression1 && expression2);//true

// Evaluates to true if expression1 OR expression2 is true, otherwise false

console.log(expression1 || expression2);//true

// Logical Not (!) turns an expression that evaluates to true to false and vice versa
// Returns true



console.log(expression2);//true

// Returns false
console.log(!expression2);//false


var firstName;

console.log(!firstName);//true


firstName = "Farley";

console.log(!firstName);//false
