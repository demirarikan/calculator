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

function operator (operator, num1, num2) {
    switch (operator) {
        case '+':
            add(num1, num2)
            break
        case '-':
            subtract(num1, num2)
            break
        case '*':
            multiply(num1, num2)
            break
        case '/':
            divide(num1, num2)
            break
    }
}

const display = document.querySelector('.display')
const digits = document.querySelectorAll('.digit')
const operators = document.querySelectorAll('.operators')

digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        display.textContent += digit.textContent
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {

    })
})