let result = document.querySelector(".textView");

function setNum(num) {
  result.value = result.value + num;
}

function equal() {
  result.value = eval(result.value);
}
function cleanInput() {
  result.value = "";
}

function cleanOne() {
  let number = result.value;
  result.value = number.slice(0, number.length - 1);
  console.log(number);
}
