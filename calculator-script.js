// Get all calculator buttons
const buttons = document.querySelectorAll('.button');
// Get the calculator display
const display = document.querySelector('#display');

// Variable to store the current input and operator
let input = "";
let operator = "";

// Function to clear the display
function clearDisplay() {
  input = "";
  operator = "";
  display.value = "";
}

// Function to calculate the square root
function calculateSquareRoot() {
  try {
    const num = eval(input);
    if (num < 0) {
      display.value = "Error";
    } else {
      const result = Math.sqrt(num);
      display.value = result;
      input = result;
      operator = "";
    }
  } catch (error) {
    display.value = "Error";
  }
}

// Add click event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener('click', event => {
    const value = event.target.innerText;

    // Check if the button is an operator or function
    if (value === '+' || value === '-' || value === '*' || value === '/' || value === '^') {
      operator = value;
      input += ` ${operator} `;
    } else if (value === '.') {
      // Prevent adding multiple decimal points
      if (!input.includes('.')) {
        input += value;
      }
    } else if (value === 'C') {
      clearDisplay();
    } else if (value === '=') {
      try {
        const result = eval(input);
        if (isNaN(result) || !isFinite(result)) {
          display.value = "Error";
        } else {
          display.value = result;
          input = result;
          operator = "";
        }
      } catch (error) {
        display.value = "Error";
      }
    } else if (value === 'sqrt') {
      calculateSquareRoot();
    } else {
      input += value;
    }

    display.value = input;
  });
});
