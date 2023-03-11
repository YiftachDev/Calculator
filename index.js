const buttons = document.querySelectorAll(".btn");
const displayHead = document.querySelector(".head");

buttons.forEach((button) => {
    button.addEventListener("click", () => displayHead.textContent += button.textContent);
});





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