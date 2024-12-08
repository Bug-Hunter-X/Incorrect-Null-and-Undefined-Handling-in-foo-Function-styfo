function foo(a, b) {
  if (a === null || a === undefined) {
    return "Error: First argument cannot be null or undefined"; 
  }
  if (b === null || b === undefined) {
    return "Error: Second argument cannot be null or undefined";
  }
  return a + b;
}

console.log(foo(null, 5)); // Outputs "Error: First argument cannot be null or undefined"
console.log(foo(5, undefined)); // Outputs "Error: Second argument cannot be null or undefined"
console.log(foo(5, 5)); // Outputs 10