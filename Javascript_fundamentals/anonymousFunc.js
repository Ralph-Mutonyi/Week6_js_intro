function ask1 (question, yes, no){
    if(confirm(question)) yes()
    else no();
}

ask1(
    "Do you Agree?",
    function() {                /* the functions are declared inside the ask(). They have no names 
                                    hence called anonymous function */
        alert("You agreed");
    },
    function(){
        alert("You cancelled the execution");
    }
)
