const calculator = document.querySelector("#calculator");
const resultEl = document.querySelector(".result");
const clearAllEl = document.querySelector("#clearAll");
const clearEl = document.querySelector("#clear");

let firstNumber = ``
let selectedOperator = ``
let afterNumber = ``
let isWaitingANewValue = false;

runEventListeners();

function runEventListeners() {
    calculator.addEventListener("click", write)
    clearAllEl.addEventListener("click", clearAll)
    clearEl.addEventListener("click", deleteAChar)
}

function clearAll() {
    firstNumber = ""
    selectedOperator = ""
    afterNumber = ""
    isWaitingANewValue = false;
    resultEl.innerHTML = ""
}

function deleteAChar() {
    if (isWaitingANewValue) {
        afterNumber = Calculator.deleteLastCharacter(afterNumber);
    } else {
        firstNumber = Calculator.deleteLastCharacter(firstNumber);
    }
    resultEl.innerHTML = Calculator.deleteLastCharacter(resultEl.innerHTML);

}

function write(e) {
    const element = e.target;

    if (element.classList.contains("number")) {
        if (isWaitingANewValue) {
            afterNumber += element.value;
        } else {
            firstNumber += element.value;

        }
        updateResultPanel(element.value)
    }
    else if (element.classList.contains("operator")) {
        if (!Calculator.isHaveOperator(resultEl.innerHTML)) {
            selectedOperator = element.value;
            isWaitingANewValue = true;
            updateResultPanel(element.value);
        }
    }
    else if (element.classList.contains("equals")) {
        let result = calculate(firstNumber, selectedOperator, afterNumber).toString();
        updateResultPanel(element.value);
        firstNumber = result;
        isWaitingANewValue = false;

        clearOperatorAndAfterNumber();
        resultEl.innerHTML = ""
        updateResultPanel(result);
    }


}

function updateResultPanel(value) {
    if (value.length >= 6) {
        value = parseFloat(value).toFixed(2);
    }
    resultEl.innerHTML += value;
}

function calculate(firstNumber, operator, secondNumber) {
    let result = 0;
    let isDotHave = Calculator.isDotHave(firstNumber) || Calculator.isDotHave(secondNumber);
    switch (operator) {
        case "+":
            result = isDotHave ? parseFloat(firstNumber) + parseFloat(secondNumber) : parseInt(firstNumber) + parseInt(secondNumber);

            break;

        case "-":
            result = isDotHave ? parseFloat(firstNumber) - parseFloat(secondNumber) : parseInt(firstNumber) - parseInt(secondNumber);

            break;

        case "*":
            result = isDotHave ? parseFloat(firstNumber) * parseFloat(secondNumber) : parseInt(firstNumber) * parseInt(secondNumber);

            break;

        case "/":
            result = isDotHave ? parseFloat(firstNumber) / parseFloat(secondNumber) : parseInt(firstNumber) / parseInt(secondNumber);

            break;


    }
    return result;


}

function clearOperatorAndAfterNumber() {
    selectedOperator = "";
    afterNumber = "";
}