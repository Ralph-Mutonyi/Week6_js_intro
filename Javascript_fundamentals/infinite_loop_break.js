let sum = 0; // falsy

while(true){  
   let value = +prompt("Enter a number", "");

   if(!value) break; // breaks if the value isnt a number. 

   sum += value;
}

alert("sum:" + sum);
