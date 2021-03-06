const num1 = document.querySelector("#firstNum");
const num2 = document.querySelector("#secondNum");
const result = document.querySelector("#result");
const history = document.querySelector("#history");

const calcTitle = document.querySelector("#calc-title");

const buttonClear = document.querySelector("#clear");

const buttonAdd = document.querySelector("#add");
const buttonSub = document.querySelector("#sub");
const buttonMult = document.querySelector("#mult");
const buttonDiv = document.querySelector("#div");

const getValues = () => {
    return [Number.parseFloat(num1.value), Number.parseFloat(num2.value)];
}

const printResult = (newValue) => {
    result.value = newValue;
}

const addToHistory = (num1, num2, operator, result) => {
    const historyLine = document.createElement("p");
    const info = document.createTextNode(`${num1} ${operator} ${num2} = ${result}`)
    historyLine.appendChild(info);
    history.appendChild(historyLine);
}

// event listener instead of having onClick to clear history
buttonClear.addEventListener("click", function(){ 
    history.innerHTML = "";
});

// event listeners to toggle calc title to red on keypress
document.addEventListener("keydown", function() {
    calcTitle.style.color="red";
});

document.addEventListener("keyup", function() {
    calcTitle.style.color="black";
})

// marks the last button used in light blue
const buttonColor = (operation) => { 
    buttonAdd.setAttribute("class", "btn btn-primary");
    buttonSub.setAttribute("class", "btn btn-primary");
    buttonMult.setAttribute("class", "btn btn-primary");
    buttonDiv.setAttribute("class", "btn btn-primary");
    let btn;
    if (operation === "+") {
        btn = buttonAdd;
    } else if (operation === "-") {
        btn = buttonSub;
    } else if (operation === "/") {
        btn = buttonDiv;
    } else if (operation === "x") {
        btn = buttonMult;
    }
    btn.setAttribute("class", "btn btn-info")
}

// on window load add a comment to the history
window.onload = () => { 
    const historyLine = document.createElement("p");
    const info = document.createTextNode("Welcome to calculator!");
    historyLine.appendChild(info);
    history.appendChild(historyLine);
}

// calc operations
const add = () => {
    const [num1, num2] = getValues();
    const newResult = num1 + num2;
    printResult(newResult);
    addToHistory(num1, num2, "+", newResult);
    buttonColor("+");
}

const sub = () => {
    const [num1, num2] = getValues();
    const newResult = num1 - num2;
    printResult(newResult);
    addToHistory(num1, num2, "-", newResult);
    buttonColor("-");
}

const div = () => {
    const [num1, num2] = getValues();
    const newResult = num1 / num2;
    printResult(newResult);
    addToHistory(num1, num2, "/", newResult);
    buttonColor("/");
}

const mult = () => {
    const [num1, num2] = getValues();
    const newResult = num1 * num2;
    printResult(newResult);
    addToHistory(num1, num2, "x", newResult);
    buttonColor("x");
}
