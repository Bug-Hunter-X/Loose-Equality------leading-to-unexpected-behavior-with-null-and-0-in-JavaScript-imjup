function foo(a, b) {
  if (a === null || b === null) {
    return null; // Corrected line: using strict equality
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, null)); // Output: null
console.log(foo(null, 2)); // Output: null
console.log(foo(0, 2)); // Output: 2