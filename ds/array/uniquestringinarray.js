// unique string in array

let arr = ["abc", "ash", "c", "swim", "ash"];
let obj = {};
for (let element of arr) {
  if (!obj[element]) {
    obj[element] = true;
  }
}
for (let key in obj) {
  console.log(key);
}
