// Array is always in ascending order this is given  we want to calculate the all pairs whoes sum is equal to
// target value

function twoSum(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let count = 0;
  while (start < end) {
    if (arr[start] + arr[end] > target) {
      end--;
    } else if (arr[start] + arr[end] < target) {
      start++;
    } else {
      if (arr[start] === arr[end]) {
        let freq = end - start + 1;
        count += Math.floor((freq * (freq - 1)) / 2);
        return count;
      } else {
        let x = 0,
          y = 0;
        let a_s = arr[start];
        while (arr[start] === a_s) {
          start++;
          x++;
        }
        let a_e = arr[end];
        while (arr[end] === a_e) {
          end--;
          y++;
        }
        count += x * y;
      }
    }
  }
  return count;
}

let arr = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6];
let target = 8;
console.log(twoSum(arr, target));
