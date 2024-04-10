// Introduction to functions

function greet(){
    console.log("hello!");
}

greet();

// params and arguements. 
function greet01(name){
    console.log(`Hello, ${name}`);
    console.log("Nice weather today right");
}

greet01('ralph');

// Arguements are inputs passed when calling a function. 

function greet02(name, weather){
    console.log(`Hello, ${name}`);
    console.log(`it's ${weather} today right?`);
}

greet02('Ralph', 'Sunny');

// Default Parameter

function greet03(name = "Ralph"){
    console.log(`Hello, ${name}`);
}

// call the function
greet03();

// Default and non default param

function greet04(weather, name="ralph"){
    console.log(`Hello, ${name}`);
    console.log(`It is ${weather} today right?`);
}

// call the function with the arguement for the non definied variable

greet04("Sunny");

function greet05(name= "Ralph", weather){
    console.log(`Hello, ${name}`);
    console.log(`Today is ${weather}`);
}

greet05(undefined, "Cloudy");

// calling an already defined paramter

function greet06(name="Ralph Mutonyi"){
    console.log(name)
}

greet06(undefined);
greet06(null);

// return statement. 

function sum(a, b){
    return a + b;
}

let result = sum(3, 2);
console.log(result)

// Return statements

function checkAge(age){
    if (age > 18){
        return "You may get  a license"
    }
    return "You may not get a car license"
}
console.log(checkAge(20));
console.log(checkAge(15));

function greet07(){
    console.log("Hello!");
    return;

    console.log("Good bye!")
}

greet07();


// Rest Parameter

// Any parameter that can accept any o. of data as its arguements.
// The arguements will be stored as an array

// defined by adding tripple dots before the parameter name

function printArgurments(...args){
    console.log(args);
}

// call the function

printArgurments("a", "b", "c");


// ArrowFunctions

// Primary method

function greetings(name){
    console.log(`Hello, ${name}`);
}


greetings("Ralph");

// Arrow Function

const greetings01 = (name) => {
    console.log(`hello, World`)
};

/* 
const myFunction = (param1, param2) => {
    // function body
}
*/


// Single line arrow funcion

const plusTwo = (num) => num+2;

// multilines -> where curly braces can be used. 

const greetings02= () =>{
    console.log("hello world")
}

// Arrow function doesnt have object that stores all arguements passed into the function

const PrintArgs = (...arguements) => {
    console.log(arguements[2]);
};

PrintArgs(1, 2, 3);

// Converting a normal function --> arrow function

/* 

1. replace the function keyword with the variable let ot const keyword
2. add (=) symbol after the function name and before round brackets
3. add the (=>) symbol after the round brackets

*/

// example

const Plus2 = (num) => {
    return num +2;
}

const plus2 = (num) => num+2;