let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
currentInput += number;
display.value = currentInput;
}

function appendOperator(op) {
if (currentInput === '') return;
firstOperand = currentInput;
operator = op;
currentInput = '';
}

function calculate() {
if (currentInput === '' || firstOperand === '') return;
let result;
switch (operator) {
case '+':
result = parseFloat(firstOperand) + parseFloat(currentInput);
break;
case '-':
result = parseFloat(firstOperand) - parseFloat(currentInput);
break;
case '*':
result = parseFloat(firstOperand) * parseFloat(currentInput);
break;
case '/':
result = parseFloat(firstOperand) / parseFloat(currentInput);
break;
default:
return;
}
display.value = result;
currentInput = result;
firstOperand = '';
operator = '';
}

function clearDisplay() {
currentInput = '';
firstOperand = '';
operator = '';
display.value = '';
}
