// Write, a code for sort an array using recursion

function insert(arr, temp) {
  if (arr.length === 0 || arr[arr.length - 1] <= temp) {
    arr.push(temp);
    return;
  }
  let l = arr[arr.length - 1];
  arr.pop();
  insert(arr, temp);
  arr.push(l);
  return;
}

function sort(arr) {
  if (arr.length === 1) {
    return;
  }
  let temp = arr[arr.length - 1];
  arr.pop();
  sort(arr);
  insert(arr, temp);
  return;
}

let arr = [3, 2, 5, 1, 9, 4];
sort(arr);
console.log(arr);
