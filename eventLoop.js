// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
// }, 0);

// setImmediate(() => {
//   console.log('Immediate 1');
// });

// new Promise((resolve) => {
//   console.log('Promise 1');
//   resolve();
// }).then(() => {
//   console.log('Promise 2');
// });

// setTimeout(() => {
//   console.log('Timeout 2');
// }, 0);

// setImmediate(() => {
//   console.log('Immediate 2');
// });

// console.log('End');
//-------------
// //start
// promise 1
//promise 2
//end
//timeout 1
//timeout 2
//immediate 1
//immediate 2


// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout');
// }, 0);

// new Promise((resolve) => {
//   console.log('Promise');
//   resolve();
// }).then(() => {
//   console.log('Promise resolved');
// });

// console.log('End');
// ------------------
//start
//promise
//end 
//promise resolved
//timeout

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
//   new Promise((resolve) => {
//     console.log('Promise inside setTimeout');
//     resolve();
//   }).then(() => {
//     console.log('Promise resolved inside setTimeout');
//   });
// }, 0);

// new Promise((resolve) => {
//   console.log('Promise 1');
//   resolve();
// }).then(() => {
//   console.log('Promise resolved 1');
// });

// console.log('End');

//-------------------------------
//start
//promise 1
//end
//promise resolved 1
//timeout 1
//Promise inside setTimeout
//Promise resolved inside setTimeout

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');

//   new Promise((resolve) => {
//     console.log('Promise inside setTimeout');
//     resolve();
//   }).then(() => {
//     console.log('Promise resolved inside setTimeout');

//     setTimeout(() => {
//       console.log('Timeout 2');

//       new Promise((resolve) => {
//         console.log('Promise inside second setTimeout');
//         resolve();
//       }).then(() => {
//         console.log('Promise resolved inside second setTimeout');
//       });
//     }, 0);
//   });
// }, 0);

// new Promise((resolve) => {
//   console.log('Promise 1');
//   resolve();
// }).then(() => {
//   console.log('Promise resolved 1');
// });

// console.log('End');
//--------------------
//start
//promise1
//end
//prromise resolved 1
//timeout 1
//Promise inside setTimeout
//Promise resolved inside setTimeout
//timeout 2
//Promise inside second setTimeout
//Promise resolved inside second setTimeout