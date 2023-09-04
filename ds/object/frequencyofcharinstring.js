let str = "javascript";
const freqMap = {}; // initially empty
for (const char of str) {
  if (freqMap.char) {
    freqMap.char += 1; // if present update it
  } else {
    // if not present add it
    freqMap.char = 1;
  }
}
console.log(freqMap);

// Note : If you are using freqMap.char instEAD of freqMap[char]
//  that in that case it consider char as string eg :- it consider char as
//   same key thus output will print ---> { char: 10 } that it always good practice to
//    use [] braces to access key in object.
