let count = 0;
const countDisplay = document.getElementById("countDisplay");

function plus() {
  count++;
  updateDisplay();
}

function minus() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

function plusTen() {
  count += 10;
  updateDisplay();
}

function minusTen() {
  count -= 10;
  updateDisplay();
}

function animateCounter() {
  countDisplay.classList.add("animate");
  setTimeout(() => {
    countDisplay.classList.remove("animate");
  }, 100);
}

function updateDisplay() {
  countDisplay.textContent = count;
  animateCounter();
}
