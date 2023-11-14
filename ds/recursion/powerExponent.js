function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent === 1) {
    return base;
  }

  let result = 1;
  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result *= base;
    }
    base *= base; // Square the base.
    exponent = Math.floor(exponent / 2); // Divide the exponent by 2.
  }

  return result;
}
const base = 2;
const exponent = 3;
const result = power(base, exponent);
console.log(result);
