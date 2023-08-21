// Write a function that takes a string as input and returns the reversed version of the string.

function reverseStr(str) {
    let arr = str.split(""); // Convert the string to an array
    let i = 0; 
    let j = str.length - 1; 
    let mid = Math.floor(str.length / 2);
    while (i < mid) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr.join(""); // Convert the array back to a string
 }
 
 console.log(reverseStr('sahib'));
 