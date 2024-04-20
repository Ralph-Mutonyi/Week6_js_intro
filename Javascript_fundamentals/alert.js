// Objects Methods

// store  related data in key value pairs

let person = {
    firstName: "Nathan",
    lastName: "Sebhastian",
    describe : function(){console.log(this.firstName);}
}

console.log(person.describe());