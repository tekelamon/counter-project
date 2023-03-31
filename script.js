// initialize counter
let counter = 0;
  
// attach to html counter
let counterElement = document.getElementById("counter");

// display current number
function updateCounter() {
  counterElement.innerText = counter
}

// add 1
function handleIncrement() {
  counter++;
  updateCounter();
}

// sub 1
function handleDecrement() {
  if( counter > 0) {  // only positive numbers
    counter--;
  }
  updateCounter();
}

// whenever the buttons are clicked, perform related action
let incrementButton = document.getElementById("increment-button");
incrementButton.addEventListener("click", handleIncrement);

let decrementButton = document.getElementById("decrement-button");
decrementButton.addEventListener("click", handleDecrement);

// display counter after initializing data
updateCounter();