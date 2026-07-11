// basic functions
function add(firstNum,secondNum) {
    return firstNum + secondNum;
}
function subtract(firstNum,secondNum) {
    return firstNum - secondNum;
}
function multiply(firstNum,secondNum) {
    return firstNum * secondNum;
}
function divide(firstNum,secondNum) {
    return firstNum / secondNum;
}

// variables
let first_num;
let second_num;
let operator;

//operate function

function operate(num1,num2,operator){
switch (operator) {
    case '+':
        return add(num1,num2);
        break;

    case '-':
        return subtract(num1,num2);
        break;

    case '*':
        return multiply(num1,num2);
        break;

    case '/':
        return divide(num1,num2);
        break;
    default:
        '??????????'
        break;
}

}

console.log(operate(2,3,'*'));