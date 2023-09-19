// given an arrray print all subarray of given array .
// subarray - it is a contiguous cross-section of your array.

function printSubarray(arr) {
  for (let start = 0; start < arr.length; start++) {
    let str = "";
    for (let end = start; end < arr.length; end++) {
      str += arr[end] + " ";
      console.log(str);
    }
  }
}

console.log(printSubarray([1, 2, 3, 4]));
