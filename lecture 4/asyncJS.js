// console.log("first");
// console.log("second");
// console.log("third");

// single thread asynchronus(non-blocking)

// console.log("first");

// setTimeout(() => {
//   console.log("second");
// }, 5000);

// console.log("third");

// const getUsers = () => {
//     let users;
//   setTimeout(() => {
//     users = [
//       { id: 1, name: "Ahmed" },
//       { id: 2, name: "Ali" },
//     ];
//     return users;
// }, 2000);
//     return users;
// };

// const result = getUsers();
// console.log(result);

// console.log("first");

// const getUsers = (cb) => {
//     setTimeout(() => {
//         const users = [
//             { id: 1, name: "Ahmed" },
//             { id: 2, name: "Ali" },
//         ];
//         cb(users);
//     }, 2000);
// };

// getUsers((users) => {
//     console.log(users);
// });

// console.log("second");

// const getUsers = () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       const users = [
//         { id: 1, name: "Ahmed" },
//         { id: 2, name: "Ali" },
//       ];
//       res(users);
//     }, 2000);
//   });
// };

// const result = getUsers();

// console.log(result);

// getUsers().then((users)=>{
//     console.log(users);
// })

console.log("first");

(async () => {

    const users = await getUsers();
    console.log(users);
    
})();

console.log("second");