// Please fill in the value of "x? so that the below condtion will become true
const x = "?";
if (x !== x) {
  console.log("hello fatfish");
}

/**
 * Explaination
 */

// NaN which is not equal to any value or even itself.
console.log(NaN === NaN); // false
console.log(x !== x); // true
console.log(Number.isNaN(x)); // true
