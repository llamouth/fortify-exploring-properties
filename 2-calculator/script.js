    const numInputs = document.querySelectorAll(".num-box");
    const tempNum = document.getElementById("temp-num");
    const signsInputs = document.querySelectorAll(".signs-box");
    const equal = document.getElementById("equal");
    const clear = document.querySelector(".clear");

    let firstNum = '';
    let secondNum = '';
    let operator = '';
    let result = '';

    numInputs.forEach(input => {
        input.addEventListener('click', () => {
            if (result !== '') {
                clearDisplay();
            }
            if (operator === '') {
                firstNum += input.textContent;
                tempNum.textContent = firstNum;
            } else {
                secondNum += input.textContent;
                tempNum.textContent = secondNum;
            }
        });
    });

    signsInputs.forEach(input => {
        input.addEventListener('click', () => {
            if (firstNum !== '' && secondNum !== '') {
                calculate();
            }
            operator = input.textContent;
        });
    });

    equal.addEventListener("click", () => {
        calculate();
    });

    clear.addEventListener('click', () => {
        clearDisplay();
    });

    function calculate() {
        const num1 = parseFloat(firstNum);
        const num2 = parseFloat(secondNum);
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case 'x':
                result = num1 * num2;
                break;
            case '・|・':
                result = num1 / num2;
                break;
            default:
                return;
        }
        tempNum.textContent = result;
        firstNum = result.toString();
        secondNum = '';
        operator = '';
    }

    function clearDisplay() {
        tempNum.textContent = '0';
        firstNum = '';
        secondNum = '';
        operator = '';
        result = '';
    }