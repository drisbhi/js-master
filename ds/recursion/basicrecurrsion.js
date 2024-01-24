function nTooneBacktracking(i, n) {
  if (i > n) return;
  nTooneBacktracking(i + 1, n);
  console.log(i);
}
nTooneBacktracking(1, 3);

function oneToNBacktracking(i, n) {
  if (i < 1) return;
  oneToNBacktracking(i - 1, n);
  console.log(i);
}
oneToNBacktracking(3, 3);

function printnto1(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  return printnto1(n - 1);
}
printnto1(6);

function print1toN(i, n) {
  if (i > n) {
    return;
  }
  console.log(i);
  return print1toN(i + 1, n);
}
print1toN(1, 6);

function printName(n) {
  if (n === 0) return;
  console.log("Sahib");
  return printName(n - 1);
}
printName(6);
