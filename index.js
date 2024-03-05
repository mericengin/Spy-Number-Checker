const resultText = document.getElementById("resultText");
const numberInput = document.getElementById("numberInput");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");

function checkSpyNumber() {
    let numberToCheck = numberInput.value;

    if(numberInput.value === "" || isNaN(numberInput.value)){
        resultText.textContent = "Please enter a viable number!";
        resultText.style.color = "red";
        return;
    }
    else {

        const digits = numberToCheck.toString().split("").map(Number);
        const sum = digits.reduce((a, b) => a + b, 0);
        const product = digits.reduce((a, b) => a * b, 1);

        if(sum === product) {
        resultText.style.color = "#4CAF50";
        resultText.textContent = `${numberToCheck} is a spy Number!`;
        } else {
        resultText.style.color = "red";
        resultText.textContent = `${numberToCheck} is NOT a spy Number!`;
        }

    }

}

checkBtn.addEventListener('click', checkSpyNumber);

document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        checkSpyNumber();
    }
});

function clear() {
    numberInput.value = "";
    resultText.textContent = "Please Enter a number.";
    resultText.style.color = "";
}

resetBtn.addEventListener('click', clear);