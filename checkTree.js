const tree = {
  a: {
    value: "A",
    b: {
      value: "B",
      c: {
        value: "C",
      },
    },
    b1: {
      value: "B",
      c: {
        value: "C",
      },
    },
  },
  b: {
    value: "A14",
    b2: {
      value: "B14",
      c: {
        value: "C14",
      },
    },
    b3: {
      value: "B12",
      c: {
        value: "C12",
      },
    },
  },
  value: "E",
};

const checkTree = (tree, value) => {
  let res = false;
  const { value: treeValue, ...rest } = tree;
  if (treeValue === value) return true;
  for (let a in rest) {
    const res = checkTree(rest[a], value);
    if (res) {
      return res;
    }
  }
  return res;
};


console.log("A", checkTree(tree, "A")); // true
console.log("B", checkTree(tree, "B")); // true
console.log("C", checkTree(tree, "C")); // true
console.log("E", checkTree(tree, "E")); // true
console.log("A14", checkTree(tree, "A14")); // true
console.log("B14", checkTree(tree, "B14")); // true
console.log("C14", checkTree(tree, "C14")); // true
console.log("C12", checkTree(tree, "C12")); // true
console.log("B12", checkTree(tree, "B12")); // true
console.log("C12", checkTree(tree, "C12")); // true
console.log("X", checkTree(tree, "X")); // false
console.log("R", checkTree(tree, "R")); // false
console.log("W", checkTree(tree, "W")); // false