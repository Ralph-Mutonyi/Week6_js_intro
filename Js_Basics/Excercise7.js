// Function called Calculate Square

// x  = squareside
// const calculateSquare = (x) => {
//     squareside = x;
//     area = x * x ;
//     perimeter  = x * 4 ;

//     console.log(squareside,area, perimeter);
// }

// calculateSquare(20);

// Exercise 8

const person = {
    name: "Ralph Mutonyi",
    age: 21,
    greeting: function greet(){
        console.log(`Hello! My name is ${this.name} and i'm ${this.age} years old`);
    },
}


person.greeting();
