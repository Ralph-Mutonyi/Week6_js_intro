var x = 100;
var y = 50;
//Comparison operators - boolean value

// equal ==
console.log(x == y);

// not equal !=
console.log(x != y);
// greator than >
console.log(x > y);
// less than < 
console.log(x < y);

// Conditional statement

// run a piece of code if a condition is met. 

// if condition

/*if(condition){
    // do something
}
*/
var balance = 1000;

if(balance > 1000){
    console.log("Purchase this item");
}

// if else
if(balance > 1000){
    console.log("Purchase this item");
}else{
    console.log("You have insufficient balance");
}

// if else if
if(balance > 1000){
    console.log("Purchase this item");
}else if(balance < 1000){
    console.log("You have insufficient");
}else{
    console.log("You have just enough")
}
