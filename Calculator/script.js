const inputField = document.getElementById("inputField");
const buttons = document.querySelectorAll(".button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;

        if (buttonValue === "=") {
            try {
                currentInput = eval(currentInput);
            } catch (error) {
                currentInput = "Error";
            }
        } else if (buttonValue === "C") {
            currentInput = "";
        } else {
            currentInput += buttonValue;
        }

        inputField.value = currentInput;
    });
});
