let ans = 0;
let op1 = "", op2 = "";
let turn = true;
let op;

let key = document.getElementsByClassName("number");
let display = document.getElementById("display");
let operators = document.getElementsByClassName("operator");
let equal = document.getElementById("equal");
let clr = document.getElementById("C");

Array.from(key).forEach((element) => {
  element.addEventListener("click", takeInputs);
});

Array.from(operators).forEach((element) => {
  element.addEventListener("click", takeOperation);
});

equal.addEventListener("click", calculate);

clr.addEventListener("click", clear);

function takeInputs() {
  let currVal = this.textContent.trim();
  if (turn) op1 += currVal;
  else op2 += currVal;
  if (display.innerText == "0") display.innerHTML = `<span>${currVal}</span>`;
  else display.innerHTML += `<span>${currVal}</span>`;
}

function takeOperation() {
  turn = false;
  op = this.textContent.trim();
  display.innerHTML += `<span>${op}</span>`;
}

function calculate() {
  op1 = parseFloat(op1);
  op2 = parseFloat(op2);
  console.log("before", op1, op2);

  switch (op) {
    case "+":
      ans = op1 + op2;
      break;
    case "-":
      ans = op1 - op2;
      break;
    case "*":
      ans = op1 * op2;
      break;
    case "/":
      ans = op1 / op2;
      if (op2 == 0) {
        display.innerHTML = `<span>infinity</span>`;
        return;
      }
      break;
  }
  display.innerHTML = `<span>${ans}</span>`;
  op1 = ans;
  op2 = "";
  turn = true;
}

function clear() {
  ans = 0;
  op1 = 0;
  op2 = 0;
  turn = true;
  display.innerHTML = `<span>${ans}</span>`;
}
