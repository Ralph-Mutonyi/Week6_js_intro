let conf = confirm("You must be atleast 18 years old to view this content");
let name = prompt("What is your name", "");
let age = prompt("What is your age?", "");

if (conf === true){
    if (age >= 18){
        alert(`Welcome ${name}`)
    }else{
        alert(`Sorry ${name}, you must be 18 years old to view this content`);
    }
} else{
    alert("You cant Open this page");
}
