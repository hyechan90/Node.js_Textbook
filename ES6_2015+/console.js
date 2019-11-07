function first() {
  second();
  console.log("First");
}
function second() {
  thrid();
  console.log("Second");
}
function thrid() {
  console.log("Third");
}

first();