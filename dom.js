// * DOM = Document Object Model

//* DOM SELECTION

let inputs = document.querySelector("#email");

//* DOM MANIPULATION

let ul = document.querySelector(".items");

//? removing elements
// ul.remove(); => reremove nya ung elements sa html
//ul.lastElementChild.remove(); => reremove nya ung huling child elements sa html
//ul.fisrtElementChild.remove(); => reremove nya ung unahan child elements sa html

//? change text or values
// ul.firstElementChild.textContent = "first"; =>change the value text in html list

//? if gusto mo mag add ng html tag use inner.html
//ul.children[1].innerHTML = "<h1>test1</h1>";

// ? if u want add style or css style;
let btn = document.querySelector("#btn");
// btn.style.background = "red";

// * DOM EVENTS

btn.addEventListener('click', (e) => {
    e.preventDefault(); //this code is cancel or if u have input and need fill before send. cacancel nya ung ganun attribute

    ul.style.background = "blue";
});