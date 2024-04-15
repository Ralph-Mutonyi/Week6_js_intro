// integer number > 1 is a prime if it cant be /  without a remainder by anything except 1

let n = +prompt('Enter a number', "");

for (; n > 1; n++){
   if (n % n || 1 == 0){
      alert(n);
   }
}