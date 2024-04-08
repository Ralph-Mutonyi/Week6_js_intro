/* 
let message = "Hello, world";

console.log(message);

let message1 = " I'm learning Javascript";

console.log(message);

const myName = "Ralph Mutonyi";

console.log(myName);

let myAge = 21;

console.log(myAge);

console.log( message + message1);

console.log("My name is :", myName);

let name = "ralph";
let topic = "Javascript";

console.log(`${name} is learning ${topic} today`)

*/

// Datatype -> Numbers ( ints and floats)

// x = 2;

// console.log (x / 30);

// this will print out a float

// Booleams

let on = true;

let off = false;

// used with control flow statements

// Undefined datatype

let firstName;
console.log(firstName);

// Null datatype
/*
let firstName01 = null;

console.log(firstName01);
*/

 
// Type Conversion and Coercion
// converting one datatype to another

let x = "7";

let y = 5;

let strscore = "1000";
let numScore = Number(strscore);

console.log(typeof(numScore));
// Type coercion

console.log(typeof(Number(x) + y));

const result = true + 1;

console.log(typeof(result));

let price = "50";
let tax = 5;

let totalPrice = Number(price) + Number(tax);

console.log(totalPrice);
