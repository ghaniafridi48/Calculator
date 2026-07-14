let one = '';
let two = '';
let operator = '';

function add(num1,num2) {
    return num1 + num2;
}
function sub(num1,num2) {
    return num1 - num2;
}
function mul(num1,num2) {
    return num1 * num2;
}
function divide(num1,num2) {
    if (num2 === 0) {
        return "nope"; 
    }
    return num1 / num2;
}

function operate(num1,num2,operator) {
    switch (operator) {
        case '+':
            return add(num1,num2);
            break;

        case '-':
            return sub(num1,num2);
            break;
            
        case '*':
            return mul(num1,num2);
            break;
            
        case '/':
            return divide(num1,num2);
            break;

        default:
            break;
    }
}


let main  = document.querySelector('.main');
main.addEventListener('click',(e) => {
    if (e.target.tagName === 'BUTTON') {
        let text = e.target.textContent;
        let display = document.querySelector('.display');//to manage display

        if (text === '+' || text === '-' || text === '*' || text === '/') {
            if (one !== '' && operator !== '' && two !== ''){
                let intermediateResult = operate(Number(one), Number(two), operator);
                display.textContent = intermediateResult;
                one = String(intermediateResult);
                two = '';
            }
            operator = text;
            display.textContent = operator;
        }
        
        else if (text === '=') {
            let result = operate(Number(one),Number(two),operator);
            if (result !== 'nope') {
                
                if (result % 1 !== 0) {
                    result = result.toFixed(4);
                }
            }
            display.textContent = result;
            one = String(result);
            two = '';
            operator = '';

        }
        else if(text === 'Clear'){
            display.textContent = '';
            one = '';
            two = '';
            operator = '';

        }
        else{
            if (operator === '') {
                one += text;
                display.textContent = one;
            }
            else{
                two += text;
                display.textContent = two;
            }
        }

    }
})