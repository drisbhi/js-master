// factorial program using recursion

function fact(n) {
  //
  if (n === 0 || n < 0) return 0;
  // base case
  if (n === 1) return 1;
  return n * fact(n - 1);
}
console.log(fact(12));
