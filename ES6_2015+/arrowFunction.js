function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x) {
  return !x;
}

const not2 = x => !x;

console.log(add1(0, 1));
console.log(add2(1, 1));
console.log(add3(2, 1));
console.log(add4(3, 1));
console.log(not1(true));
console.log(not2(false));
