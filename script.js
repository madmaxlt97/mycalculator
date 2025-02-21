const display = document.getElementById("display");

function addToDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error!";
  }
}

document.addEventListener("keyup", (e) => {
  //RegExp
  const key = e.key;
  if (/[\d+\-*/.=]/.test(key)) {
    addToDisplay(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace" || key === "Backspace" || key === "Delete") {
    clearDisplay();
  }
});
