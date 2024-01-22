const createCounter = function () {
  this.counter = 0;
  this.increment = () => {
    this.counter++
    return this
  };
  this.getCount = () => this.counter;

  return {
    increment: this.increment, getCount: this.getCount
  }
}
const counter = createCounter();

console.log(counter.increment().getCount()); // Выведет: 1
console.log(counter.increment().increment().getCount()); // Выведет: 3
console.log(counter.getCount()); // Выведет: 3