let view = document.querySelector(".viewfinder");
let numbers = document.querySelectorAll("#number");
let operator = document.querySelectorAll("#operator");
let calcStr = ``;

numbers.forEach((btn) => {
  let btnContent = btn.innerHTML;
  btn.setAttribute("onclick", `addChar('${btnContent}')`);
});

operator.forEach((btn) => {
  let btnContent = btn.innerHTML;
  btn.setAttribute("onclick", `addOperator('${btnContent}')`);
});

function addOperator(op) {
  if (op === "-") {
    return minus();
  }
  calcStr === `` ? null : (calcStr += op);
  view.innerHTML += op;
}

function minus() {
  calcStr += "-";
  view.innerHTML += "-";
}

function addChar(char) {
  view.innerHTML += char;
  calcStr += char;
}

function calc(str) {
  console.log(str);
  return str === `` ? (view.innerHTML = "") : (view.innerHTML = eval(str));
}

function square() {
  let errSqr = (view.innerHTML = "error, add a number");
  let calcSqr = (view.innerHTML = eval(`${calcStr}**2`));
  return calcStr === `` ? errSqr : calcSqr, (calcStr = calcSqr);
}

function per100() {
  return calcStr === `` ? null : view.innerHTML, (calcStr = calcStr / 100);
}

function pi() {
  calcStr += "3.14159265359";
  view.innerHTML += "3.14159265359";
}

function cls() {
  calcStr = ``;
  view.innerHTML = "";
}
