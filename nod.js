const findNod1 = (a, b) => {
  const min = a > b ? b : a;
  const max = a < b ? b : a;
  const remaining =  max % min;
  if (remaining === 0) return min;

  return findNod(remaining, min);
}


// console.log(findNod(24,8));

const findNod2 = (a, b) => {
  const min = a > b ? b : a;
  const max = a < b ? b : a;

  if (max - min === 0) return min;

  return findNod2(max - min, min);
}

// console.log(findNod2(15, 28));