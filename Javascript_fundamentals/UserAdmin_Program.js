// prompt user for identity
let userVisit = prompt("Who is there?", ""); 


if (userVisit === "Admin"){
   // if user is admin, let them enter the password
   let Password = prompt("Enter Password?", "");

   // if password is >> TheMaster
   if (Password === "TheMaster"){
      alert("Welcome");

   }else if(Password === "" || Password === null){
      alert("Canceled");

   }else{
      alert("Wrong password");
   }
   // if user doesnt enter anything , cancel request to proceed
}else if(userVisit === "" || userVisit === null){
   alert("Canceled");

   // if user enters anything else, the system doesnt know them
}else{
   alert("I don't know you");
}
