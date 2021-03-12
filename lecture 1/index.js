// const helper = require("./helpers")

// const arr = [1, 2, 3, 4, 5];

// const newArr = timesTwo(arr)

// const anotherNewArr = timesThree(arr)

// console.log(newArr);

//=========================
// console.log(helper);

// const x = helper.function1([1, 2, 3, 4])
// console.log(x);

//=========================

// console.log(helper);
// const x = helper.timesTwo([1, 2, 3, 4])
// console.log(x);

//=========================
const {timesTwo, timesThree} = require("./helpers")

const x = timesTwo([1, 2, 3, 4])
console.log(x);