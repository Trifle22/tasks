function sum(a,b) {
  console.log('Calculating sum...');
  return a + b;
}

const cachingDecorator = function(func) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);

    if (!(key in cache)) {
      console.log('calculating');
      cache[key] = func(...args);
    }
    else {
      console.log('from cache');
    }
    return cache[key]
  }
}

const cachedSum = cachingDecorator(sum)

console.log(cachedSum(1,2));
console.log(cachedSum(1,2));
console.log(cachedSum(1,3));
console.log(cachedSum(1,3));