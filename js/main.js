// Caching the DOM 
const userInput = document.querySelector('#userInput');
const kilometerCard = document.querySelector('.kilometerCard');
const radioKM = document.querySelector('#kilometer');
const radioCM = document.querySelector('#centimeter');

// Variables
let isEntered = false;

userInput.addEventListener('keyup', (event) => {
  checkEntered();
  if (isEntered && radioKM.checked) {
    let outcome = userInput.value / 1000;
    kilometerCard.textContent = `${outcome.toFixed(3)} Kilometer`;
    kilometerCard.style.display = "flex";
  }
  if (isEntered && radioCM.checked) {
    let outcome = userInput.value * 100;
    kilometerCard.textContent = `${outcome.toFixed(3)} Centimeter`;
    kilometerCard.style.display = "flex";
  }
  if (isEntered == false) {
    kilometerCard.textContent = "Please enter a value."
    kilometerCard.style.display = "flex;"
  }
});

userInput.addEventListener('change', (event) => {
  checkEntered();
  if (isEntered && radioKM.checked) {
    let outcome = userInput.value / 1000;
    kilometerCard.textContent = `${outcome.toFixed(3)} Kilometer`
    kilometerCard.style.display = "flex";
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