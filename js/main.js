// Caching the DOM 
const userInput = document.querySelector('#userInput');
const poundsCard = document.querySelector('.poundsCard');

// Variables
let isEntered = false;

userInput.addEventListener('keyup', (event) => {
  checkEntered();
  if (isEntered) {
    let outcome = userInput.value * 2.204622;
    poundsCard.textContent = `${outcome.toFixed(2)} pounds`;
    poundsCard.style.display = "flex";
  } else {
    poundsCard.textContent = "Enter a value";
  }
});

userInput.addEventListener('change', (event) => {
  checkEntered();
  if (isEntered) {
    let outcome = userInput.value * 2.204622;
    poundsCard.textContent = `${outcome.toFixed(2)} pounds`
    poundsCard.style.display = "flex";
  }
});

// Check if there is something in the inputfield
const checkEntered = () => {
  if (userInput.value.length > Number(0)) {
    isEntered = true;
  } else {
    isEntered = false;
  }
};