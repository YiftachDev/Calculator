let operator = '';
let previousValue = '';
let currentValue = '';


document.addEventListener("DOMContentLoaded", () => {
    const clear = document.querySelector("#clear-btn");
    const equal = document.querySelector(".equal");
    const decimal = document.querySelector(".decimal");
    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operation");
    const previousScreen = document.querySelector(".previous");
    const currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
        previousScreen.textContent = previousValue += " " + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", () => {
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = '';
        currentScreen.textContent = '';
    })
})


function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num;
    }   
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}