var candyMachine1 = {
  status: {
    name: "node",
    count: 5
  },
  getCandy: function() {
    return --this.status.count;
  }
};
var getCandy1 = candyMachine1.getCandy();
var count1 = candyMachine1.status.count;
console.log(count1);

const candyMachine2 = {
  status: {
    name: "node",
    count: 5
  },
  getCandy2() {
    return --this.status.count;
  }
};
const {
  getCandy2,
  status: { count2 }
} = candyMachine2;

var array1 = ["nodejs", {}, 10, true];
var node1 = array1[0];
var obj1 = array1[1];
var bool1 = array1[array1.length - 1];

console.log(node1, obj1, bool1);

console.log("=============");

const array2 = ["nodejs", {}, 10, true];
const [node2, obj2, , bool2] = array2;
console.log(node2, obj2, bool2);
