// Introduction to Control Flow
// Conditionals and loops

// conditionals

// if else

let balance = 3000;
if(balance > 5000) {
    console.log("You can got to the vacation.")
}else{
    console.log("Sorry, no trip for you")
};


// if else if

let day = "Tuesday";

if(day = "Tuesday"){
    console.log("The demonstration will happen")
}else if(day = "monday"){
    console.log("Get ready!!!")
}else{
    console.log("No demo!")
};

// Switch case statement

let age = 15;

switch(age){
    case 10:
        console.log("Age is 10")
    break;

    case 20:
        console.log("Age is 20")
    break;
    default:
        console.log("Age is neither 10 or 20");
}

let num = 0;

switch(num){
    case true:
        console.log("The value is true")
    break;

    case false:
        console.log("The value is false")
    break;

    default:
        console.log("Not a boolean")
}

// switch case values doesnt get evaluated as true or false

let age1 = 5;

switch(age1){
    case age1 < 10:
        console.log("Value is less than ten")
    break;

    case age < 20:
        console.log("Value is less than twenty")
    break;

    default:
        console.log("Value is twenty or more")
}

// lots of condition for the same code block

// use logical operators && and  ||

// example

let myFood = "Banana";

if(myFood === "Banana" || myFood === "Apple"){
    console.log("Eact fruits everyday to keep you healthy");
}

if (myFood ==="Chocolate Cake"){
    console.log("Enjoy the sweat treat");
}

// replacing the above code using the switch case statements

switch(myFood){
    case "Banana":
    case "Apple":
        console.log("Enjoy the Healthy Food");
    break;

    case "Chocolate Cake":
        console.log("Enjoy the sweat treat");
    break;
}


// Exercise #5

let grade = "A";

switch(grade){
    case "A":
        console.log("You passed, and hence get a chocolate")
    break;

    case "B":
        console.log("You get a  cookie")
    break;

    case "C":
        console.log("You get  a candy")
    break;

    default:
        console.log("No reward")
}

// Loops
// for and while loop

// for

for(let x = 1; x < 10; x++){
    console.log(x)
}

/*
fpr ( initialization; condition expression ; arithmetic increment/ decrement){
    code to execute as long as condition is true
}
*/

for(let x = 1; x < 20; x += 3){
    console.log(x);
}

for (let x = 10; x >= 1 ; x--){
    console.log(x);
}

for(let x = 1; x < 2; x++){
    console.log(x);
}

// practical for loop example = flipping coin

// math.random method used

let heads = 0;
let tails = 0;

for(x = 1; x<=10; x++){
    if(Math.random() < 0.5){ 
        tails++;
    }else{
        heads++;
    }
}
console.log("The coin was tossed 10 times");
console.log(`Number of heads: ${heads}`);
console.log(`Number of tails: ${tails}`)

let randomNumber = Math.random();
console.log(randomNumber);

// alternative scenario where the for loop isn't useful

// find out how many times you need to flip a coin until it lands on head
// This is where the while loop comes into place

let i = 0;
while (i < 6){
    console.log(`The value of i = ${i}`);
    i++;
}

// avoid getting into a infinite loop while using the while loop

// Practical Example -- how many times do you flip a coin until it lands on head


// Declare initial value for the flip and isHeads variable

let flip = 0;
let isHeads = false;

// start the while loop

while(!isHeads){  // while it hasnt landed on heads
    flip++;
    isHeads = Math.random() < 0.5;
}

console.log(`it took ${ flip} flips to land on heads`);


// Exercise 6

// Write a program that prints half a pyramid using asterisks


// define pyramid height
let height = 5;

// loop through each level of the pyramid

for (let i = 1; i <= height; i++){

    // for each level print that number of asterisks. 
    let stars= "";
    for (let j = 1; j <= i;  j++){
        stars += '*';
    }

    console.log(stars);
}

// Decrementing Pyriamid

let initialHeight = 5; // max height of the pyramid

for (let i = initialHeight; i > 0; i--){ // outer loop ( starts from 5 as it decreases down until i until i > 0)

    let stars = '';  // empty variable

    for (let j = 0; j < i; j++){ // inner loop -> runs for each row. 
        stars += "*";
    }
    console.log(stars);
}




