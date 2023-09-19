// fib program using recursion

function fib(n) {
  // base case
  // if(n=== 0 )return 0 ;
  // if( n === 1) return 1 ;  we can reduce this both statement
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(5));
