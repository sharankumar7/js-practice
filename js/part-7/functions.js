// first way

function add(x) {
  //   console.log(x * x);
}
add(5);

// 1.creating func and storing it in a variable
function makeTea(typeOftea) {
  //   console.log(`making ${typeOftea}`);
}
let teaOrder = makeTea("green tea");

// 2.function inside a function

function orderTea(teatype) {
  function confirmOrder() {
    return `order confirmed for chai`;
  }
  return confirmOrder();
  //   return `${teatype} is being made`;
}
let order = orderTea("chai");
// console.log(order);

// 3.arrow function
const calculateTool = (price, quantity) => price * quantity;
// if it is one line then dont need of brackets and return function
let totalcost = calculateTool(100, 5);
console.log(totalcost);

// 4.
