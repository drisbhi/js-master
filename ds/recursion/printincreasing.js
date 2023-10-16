function naturalNum(n) {
  // base case
  if (n < 1) return;
  // assumption :- f(n-1) prints  n  to n-1
  naturalNum(n - 1);
  // my work print the number n
  console.log(n);
}

naturalNum(6);

/**
output
1
2
3
4
5
6
 */
