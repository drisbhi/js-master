/*
implement a recursive function to reduce a number to 1 with the fewest steps,
 using three possible operations: subtracting 1, dividing by 3 (if divisible),
 and dividing by 2 (if divisible). 
*/

function reduceto1(n) {
  // base case
  if (n === 1) return 0;
  if (n < 1) return Infinity;

  let option1 = Infinity;
  let option2 = Infinity;
  let option3 = Infinity;

  if (n % 3 === 0) {
    option1 = 1 + reduceto1(n / 3);
  }
  if (n % 2 === 0) {
    option2 = 1 + reduceto1(n / 2);
  }
  option3 = 1 + reduceto1(n - 1);

  return Math.min(option1, option2, option3);
}

console.log(reduceto1(10)); // Output: 3
