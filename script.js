// variables
let first_num = '';
let second_num = '';
let operator = '';

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
//functions that update number variables when the calculator’s digit buttons are clicked.
let display = document.querySelector('.display');

document.querySelector('.main').addEventListener('click',(e) => {
    if(e.target.tagName === 'BUTTON'){
        let text = e.target.textContent;
        if (text === '+' || text === '-' || text === '*' || text === '/'){
            
            if (first_num !== '' && operator !== '' && second_num !== '') {
                let result = operate(Number(first_num),Number(second_num),operator);
                display.textContent = result;
                first_num = String(result);
                second_num = '';
            }
            operator = text;
            
        }
        else if(text === '='){
            display.textContent = operate(Number(first_num),Number(second_num),operator);
            
        }
        else{
            if (operator === '') {
                first_num += text;
                display.textContent = first_num;
            }
            else{
                second_num += text;
                display.textContent = second_num;
            }

       }
    }
});

