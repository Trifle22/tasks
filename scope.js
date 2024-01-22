// function outerFunction() {
//   let outerVar = "I am outer!";

//   function innerFunction() {
//     let innerVar = "I am inner!";
//     console.log("Inner function:", outerVar, innerVar);
//   }

//   innerFunction();

//   console.log("Outside inner function:", innerVar);
// }

// outerFunction()

const obj = {
  first: 'first',
  getFirst: () => {
    return this.first;
  }
}

console.log(obj.getFirst());