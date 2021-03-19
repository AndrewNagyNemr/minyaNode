const timesTwo = (arr) => {
  return arr.map((x) => x * 2);
};

const timesThree = (arr) => arr.map((x) => x * 3);

// module.exports = {
//     function1 : timesTwo,
//     function2 : timesThree
// }

// module.exports = {
//     timesTwo : timesTwo,
//     timesThree : timesThree
// }

module.exports = {
  timesTwo,
  timesThree,
};
