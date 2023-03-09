const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operate = (x, y, operator) => {
    switch (operator) {
        case ('+'): add(x, y); break;
        case ('-'): subtract(x, y); break;
        case ('*'): multiply(x, y); break;
        case ('/'): divide(x, y); break;
    }
}