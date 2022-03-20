function add (num1, num2){
    return num1 + num2
}

function subtract (num1, num2) {
    return num1 - num2
}

function multiply (num1, num2) {
    return num1 * num2
}

function divide (num1, num2) {
    return num1 / num2
}

function calculate (operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(Number(num1), Number(num2))
            break
        case '-':
            return subtract(Number(num1), Number(num2))
            break
        case '*':
            return multiply(Number(num1), Number(num2))
            break
        case '/':
            return divide(Number(num1), Number(num2))
            break
    }
}

const display = document.querySelector('.display')
const digits = document.querySelectorAll('.digit')
const operators = document.querySelectorAll('.operator')
const equalBtn = document.querySelector('#equal')
let num1, num2, oper

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        display.textContent += digit.textContent
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        oper = operator.textContent
        if(num1 === undefined){
            num1 = display.textContent
            console.log(num1)
        }
        display.textContent = ''
    })
})

equalBtn.addEventListener('click', () => {
    if(num1 !== undefined) {
        num2 = display.textContent
        console.log(num2)
        display.textContent = calculate(oper, num1, num2)
        num1, num2, oper = undefined
    }
})