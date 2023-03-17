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
    
    equal.addEventListener("click", () => {
        if (currentValue !== '' && previousValue !== '')
        {
            let res = operate(previousValue, currentValue, operator);
            previousValue = res;
            previousScreen.textContent = '';
            currentScreen.textContent = previousValue;
        }

    })
    
    decimal.addEventListener("click", () => {
        addDecimal(currentScreen);
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


function operate(first, second, operation) {
    let res;
    first = parseFloat(first);
    second = parseFloat(second);
    switch (operation) {
        case '+': res = add (first, second); break;
        case '-': res = sub (first, second); break;
        case '/': res = divide (first, second); break;
        case '*': res = multi (first, second); break;
    }
    return roundNumber(res);
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

function add(x, y) {
    return x + y
}

function sub (x, y) {
    return x - y;
}

function divide (x, y) {
    return x / y;
}

function multi (x, y) {
    return x * y;
}

function addDecimal(screen) {
    if (!currentValue.includes(".")) {
        currentValue += ".";
        screen.textContent = currentValue;
    }
}