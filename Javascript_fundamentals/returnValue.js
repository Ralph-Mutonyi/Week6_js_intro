function checkAge(age){
    if (age >= 18){
       return true;
    }else {
       return confirm("Do you have permission from your parents?");
    }
 }
 
 let age = prompt("How old are you?", 18);
 
 if (checkAge(age)){
    alert('Access granted');
 }else{
    alert('Access Denied');
 }
 
 function showMovie (age){
    if(! checkAge(age)){
       return;
    }
 
    alert("Showing you the Movie");
 }
 
 showMovie(age);

 // never add anewline between return and the value

 return;
    (some + long + expression + or + whatever * f(a) + f(b))


// js assumes the semicolon after a return. 

// right order is 

return (
    some + long + expression
    + or + 
    whatever * f(a) + f(b)
);

