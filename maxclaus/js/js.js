/**
 * file: js.js
 * purpose: interactivity
 **/

console.log('JavaScript from js/js.js: up and running!');

function addClass() {
  document.body.classList.add("sent");
}

sendLetter.addEventListener("click", addClass);