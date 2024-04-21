// Element.addEventListener(type, function);
const button = document.querySelector('#changeText');

function newText(event){
    const p = document.querySelector ('#myParagraph');
    p.innerText = "The text has been changed";  // sets the text of the element .
}

button.addEventListener('click' , newText)

document.addEventListener('keydown',event => {
    console.log(`A key is pressed:${event.key}`);
});


document.addEventListener('keyup', event => {
    console.log(`A key is released: ${event.key}`);
});

document.addEventListener('mousedown', event => {
    console.log('the mouse is pressed');
});

document.addEventListener('mouseup', event => {
    console.log('the mouse is release');
});

// Removing Event Listeners
/*
call the removeEventListener() method by passing the type of event
and function you passed to the addEventListener() method 
*/

button.removeEventListener('click', newText);

// nameless functions cant be removed 
button.addEventListener('click', function(event){
    alert('Button is clicked');
});

// LISTENING TO EVENTS USING HTML ATTRIBUTES

// on[eventName] attribute to html elements


// Method used to prevent default behavior of an element


