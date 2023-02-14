let displayValue = 0

let screen = document.querySelector(".screen")

// Operations
const add = function(n1, n2) {
	let answer = n1 + n2
  return answer
};

const subtract = function(n1, n2) {
  let answer = n1 - n2
  return answer
};

const sum = function(numbers) {
  let answer = numbers.reduce(
    (total, numbers) => total + numbers, 0
    )
  return answer
};

const multiply = function(numbers) {
  let answer = numbers.reduce(
    (total, numbers) => total * numbers, 1
    )
  return answer
};

const power = function(n1, n2) {
  let answer = n1 ** n2
  return answer
};

const factorial = function(number) {
  let answer = 1
  for (i = number; i>0; i--) {
    answer *= i
  }
  return answer
};

// Operate
function operate(n1, n2, operator) {
  console.log(operator(n1, n2)) 
}

// Get input
let numberButton = document.querySelectorAll(".number")
  numberButton.forEach(button => {
  button.addEventListener("click", input);
});



function input(event) {
  displayValue += event.target.id
  screen.innerText = displayValue
}

// Display