function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This is incorrect if you intend to handle null or undefined differently
  }
  return a + b;
}

console.log(foo(null, 5)); // Outputs 0. Should it handle null differently?
console.log(foo(undefined, 5)); // Outputs 0. Should it handle undefined differently?