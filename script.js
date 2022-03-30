function add (num1, num2){
    return Math.round((num1 + num2) * 100000000)/100000000
}

function subtract (num1, num2) {
    return Math.round((num1 - num2) * 100000000)/100000000
}

function multiply (num1, num2) {
    return Math.round((num1 * num2) * 100000000)/100000000
}

function divide (num1, num2) {
    return Math.round((num1 / num2) * 100000000)/100000000
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
const clearBtn = document.querySelector('.clear')

const calc = {
    displayNum: '',
    firstNum: null,
    secNum: null,
    waitingForSecNum: false,
    operator: null,
}

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        if(calc.waitingForSecNum === false){
            calc.displayNum += digit.textContent
            calc.firstNum = calc.displayNum
            display.textContent = calc.displayNum 
        } else {
            calc.secNum = calc.firstNum
            calc.displayNum = digit.textContent
            display.textContent = calc.displayNum
            calc.waitingForSecNum = false
        }
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        calc.operator = operator.textContent
        calc.waitingForSecNum = true

    })
})

equalBtn.addEventListener('click', () => {
    if(calc.firstNum!==null && calc.secNum!==null && calc.operator !== null){
        calc.displayNum = calculate(calc.operator, calc.secNum, calc.firstNum)
        console.log('secnum:' + calc.secNum)
        console.log('firstnum:' + calc.firstNum)
        console.log('res:' + calc.displayNum)
        display.textContent = calc.displayNum
    }
})

clearBtn.addEventListener('click', () => {
        display.textContent = ''
        calc.displayNum = ''
        calc.firstNum = null
        calc.secNum = null
        calc.waitingForSecNum = false
        calc.operator = null
})