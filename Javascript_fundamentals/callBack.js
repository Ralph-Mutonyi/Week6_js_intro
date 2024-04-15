let ask = function (question, yes, no){
    if (confirm(question)){
        yes();
    }else{
        no()
    }
}

function showOk (){
    alert("You Agreed");
}

function ShowCancel(){
    alert("You Canceled the execution");
}

let func = ask("Do you Agree", showOk, ShowCancel);


func();

// callbacks using arrow function syntax

/*
function ask (question,yes,no) {
    (confirm(question)) ? yes() : no()
}

ask(
    "Do you agree?",
    () => alert("You agreed"),
    () => alert("You canceled the execution")
)
*/

