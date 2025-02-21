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
function deleteLastSign() {
  display.value = display.value.slice(0, -1);
}

document.addEventListener("keyup", (e) => {
  //RegExp
  const key = e.key;
  if (/[\d+\-*/.=]/.test(key)) {
    addToDisplay(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Delete") {
    clearDisplay();
  } else if (key === "Backspace") {
    deleteLastSign();
  }
});
