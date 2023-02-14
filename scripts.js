let n1 = ""
let n2 = ""
let operator = ""
let calculating = false

let screen = document.querySelector(".screen")

// clear
let clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", clearAll);

function clearAll() {
  n1 = ""
  n2 = ""
  calculating = false
  screen.innerText = "0"
}

// Get input
let numberButton = document.querySelectorAll(".number")
numberButton.forEach(button => {
  button.addEventListener("click", inputNumber);
});

function inputNumber(event) {
  if (!calculating) {
    n1 += event.target.id
  } else {
    n2 += event.target.id
  }
  displayValue = n1 + operator + n2
  screen.innerText = displayValue
}

let operatorButton = document.querySelectorAll(".operator")
operatorButton.forEach(button => {
  button.addEventListener("click", inputOperator);
});

function inputOperator(event) {
  console.log(n1, n2, typeof n1)
  operator = event.target.id
  displayValue += event.target.id
  screen.innerText = displayValue
  calculating = true
}
// Display

// show answer
document.querySelector(".equal").addEventListener("click", operate);

// Operate
function operate() {
  n1 = parseFloat(n1)
  n2 = parseFloat(n2)
  switch (operator) {
    
    case "+":
      add()
      break;
    case "-":
      subtract()
      break;
    case "*":
      multiply()
      break;
    case "/":
      divide()
      break;
    default:
      return;
    }
    displayValue = n1
    n2 = ""
    screen.innerText = displayValue
}

// Operations
function add() {
	n1 += n2
};

function subtract() {
  n1 -= n2
};

function multiply() {
  n1 *= n2
};

function divide() {
  n1 /= n2
};

function power () {
  n1 = n1 ** n2
};

function factorial () {
  let answer = 1
  for (i = n1; i>0; i--) {
    answer *= i
  }
  n1 = answer
};