// Caching the DOM 
const userInput = document.querySelector('#userInput');
const kilometerCard = document.querySelector('.kilometerCard');
const radioKM = document.querySelector('#kilometer');
const radioCM = document.querySelector('#centimeter');

// Variables
let isEntered = false;

window.addEventListener('load', (event) => {
  kilometerCard.textContent = "Please enter a value.";
})

userInput.addEventListener('keyup', (event) => {
  checkEntered();
  if (isEntered && radioKM.checked) {
    convertK();
  }
  if (isEntered && radioCM.checked) {
    convertC();
  }
  if (isEntered == false) {
    kilometerCard.textContent = "Please enter a value.";
  }
});

userInput.addEventListener('change', (event) => {
  checkEntered();
  if (isEntered && radioKM.checked) {
    convertK();
  }
  if (isEntered && radioCM.checked) {
    convertC();
  }
  if (isEntered == false) {
    kilometerCard.textContent = "Please enter a value."
  }
});

radioKM.addEventListener('click', (event) => {
  checkEntered();
  convertK();
});

radioCM.addEventListener('click', (event) => {
  checkEntered();
  convertC();
});

// Check if there is something in the inputfield
const checkEntered = () => {
  if (userInput.value.length > Number(0)) {
    isEntered = true;
  } else {
    isEntered = false;
  }
};

//Convert meter to kilometer function
const convertK = () => {
  let outcome = userInput.value / 1000;
  kilometerCard.textContent = `${outcome.toFixed(1)} Kilometer`;
}

//Convert meter to centimer function
const convertC = () => {
  let outcome = userInput.value * 100;
  kilometerCard.textContent = `${outcome.toFixed(1)} Centimeter`;
}