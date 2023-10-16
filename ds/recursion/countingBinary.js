// counting binary without consecutive 1

/* 
  n = 1   ->  0 , 1  output -> 2
  n =2    -> 00 , 01 , 10  output => 3
  n =3    -> 000 , 001 , 010 , 100 , 101 output => 5 
*/

function binary(n) {
  // base case
  if (n === 1) return 2;
  if (n === 2) return 3;
  return binary(n - 1) + binary(n - 2);
}
console.log(binary(5));
