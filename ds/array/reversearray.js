// reverse array ---> using two pointers approach

function swap(arr, i, j) {
  let temp;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function reverseArray(arr) {
  let n = arr.length;
  let i = 0;
  let j = n - i - 1;
  while (i <= j) {
    swap(arr, i, j);
    i++;
    j--;
  }
}
let a = [4, 5, 2, 3, 6, 9];
reverseArray(a);
console.log(a);
