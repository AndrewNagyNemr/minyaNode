// var => const & let
// for(let i=0; i<5; i++){
//     console.log(i);
//     // 0->4
// }

// console.log(i);

//==========================

// declaration => not defined
// let i;
// // assignment => undefined
// i= 5;

// let x=5;

// let i = 0;

// for (x = 0; x < 2; x++) {
//     let i= 7
//   console.log(i);
// }

//==========================

// function add(a, b) {
//   return a + b;
// }

// const add = (a, b)=>{
//     return a+b
// }

// const add = (a, b)=>a+b

//==========================

// reference type

// const arr = [1, 2, 3, 4, 5];

// // arr => address of the array in that memory

// arr.push(6);
// arr[1] = 0;

// // arr = [5, 6, 7] => erroe

// const person = {
//   name: "Ahmed",
// };

// person.age = 21;

//==========================

// const arr = [1, 2, 3, 4, 5, 6];

// const newArr = arr.map(timesTwo)

// // [2, 4, 6 ...]

// const timesTwo = (x)=>{
//     return x*2
// }

// const newArr = arr.map((x)=>x*2)

//==========================

// const arr = [1, 2, 3, 4, 5, 6];

// // [2, 4, 6]

// const newArr = arr.filter((x)=>x%2 === 0)

//==========================

// const people = [
//   { name: "Ahmed", age: 21 },
//   { name: "Ali", age: 25 },
//   { name: "Fatma", age: 24 },
// ];

// people.filter((person) => person.age > 21);

// people.find((person) => person.age === 25);

// people.findIndex((person) => person.age === 25);


//==========================

// const arr = [1, 2, 3, 4]

// //array destructuring 

// // const first = arr[0];
// // const second = arr[1];
// // const third = arr[2];

// const [ , second, third] = arr

//==========================

// const person = {
//     name : "Ali",
//     age : 22
// }

// // const name = person.name
// // const age =  person.age

// const {age, name} = person

//==========================


// const person = {
//     name : "Ahmed"
// }

// const newPerson = person

// newPerson.name = "Moustafa"

// console.log(person); // => "Moustafa"


// const person = {
//     name : "Ahmed"
// }

// const newPerson = { ...person }

// newPerson.name = "Moustafa"

// console.log(person); // => "Ahmed"