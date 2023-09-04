// loops on object
let x = {
  name: "Ash",
  company: "TFT",
  years: 2.5,
  designation: "Software Engineer L1",
};

let keyOfx = Object.keys(x); // if you want only keys of an object i.e - x
// it will return all keys in an array
console.log(keyOfx);
let valueOfX = Object.values(x); // if you want only values of an object i.e - x
// it will return all keys in an array
console.log(valueOfX);

let entriesOfX = Object.entries(x); // it will return array of arrays of  the key value pairs
console.log(entriesOfX);
