// Stores multiple values like an array but in a key: value pair format

let myBook = {
    title: "You dont know Js", // property name
    Author: "Nathan sebhastian", // property value

    // assigning a function as value
    describe: function (){
        console.log(`Book title: ${this.title}`);
        console.log(`Book Author: ${this.Author}`);
    },
};

// console.log(myBook.title);
// console.log(myBook.Author);
// console.log(myBook.describe);

// // using square brackets ( need to wrap the key inside string quotation marks (""))

// console.log(myBook["title"]);
// console.log(myBook["Author"]);


// adding a property to an object

// use either the dot (.) or square brackts [""] notation

// example

myBook.year = "2023";
myBook.Publisher ="CodeWithNathan";



myBook["Awardswon"] = "Best Intro Js Book of the year 2023";

// modifying an object

myBook.Author = "John Doe";

console.log(myBook);

myBook["Title"] = "Introduction to JS";

// console.log(myBook);

// deleting an object

// use the delete operator

delete myBook.Title;

// console.log(myBook);

// checking if a property exists in an object

// check if title exists in myBook

console.log("title" in myBook);

console.log("Title" in myBook);

