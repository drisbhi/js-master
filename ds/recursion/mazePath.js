function mazePath(i, j, n, m) {
  // base case
  if (i == n - 1 && j == m - 1) return 1;
  if (i >= n || j > m) return 0;
  return mazePath(i, j + 1, n, m) + mazePath(i + 1, j, n, m);
}
console.log(mazePath(0, 0, 3, 3));
