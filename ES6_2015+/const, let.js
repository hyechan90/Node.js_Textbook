if (true) {
  var x = 3;
}
console.log(x);

if (true) {
  //const y = 3; 에러 : const는 블록 변수 접근 X
}
//console.log(y);

const a = 0;
a = 1; // 에러
let b = 0;
b = 1;
const c; // 에러
