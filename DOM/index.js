// Element.addEventListener(type, function);
const button = document.querySelector('#changeText');

function newText(event){
    const p = document.querySelector ('#myParagraph');
    p.innerText = "The text has been changed"; 
}

button.addEventListener('click' , newText)
