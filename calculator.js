const num1 = document.querySelector("#firstNum");
const num2 = document.querySelector("#secondNum");
const result = document.querySelector("#result");
const history = document.querySelector("#history");
const clearButton = document.querySelector("#c");

const getValues = () => {
    return [Number.parseFloat(num1.value), Number.parseFloat(num2.value)];
}

const printResult = (newValue) => {
    result.value = newValue;
}

const addToHistory = (num1, num2, operator, result) => {
    const addParagraph = document.createElement("p");
    const info = document.createTextNode(`${num1} ${operator} ${num2} = ${result}`)
    addParagraph.appendChild(info);
    history.appendChild(addParagraph);
}

c.addEventListener("click", function(){ // event listener
    history.innerHTML = "";
});

const add = () => {
    const [num1, num2] = getValues();
    const newResult = num1 + num2;
    printResult(newResult);
    addToHistory(num1, num2, "+", newResult);
}

const subtract = () => {
    const [num1, num2] = getValues();
    const newResult = num1 - num2;
    printResult(newResult);
    addToHistory(num1, num2, "-", newResult);
}

const divide = () => {
    const [num1, num2] = getValues();
    const newResult = num1 / num2;
    printResult(newResult);
    addToHistory(num1, num2, "/", newResult);
}

const multiply = () => {
    const [num1, num2] = getValues();
    const newResult = num1 * num2;
    printResult(newResult);
    addToHistory(num1, num2, "x", newResult);
}

// window.onload = () => {
//     prompt("Tell me how you feel");
// }