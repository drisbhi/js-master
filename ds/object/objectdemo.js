// creates a object
let x = { name: "sahib", age: 25 };
let y = {
  name: "Deepanshu",
  age: 27,
};
// acces any value using the key
//Note :- we can access any value using key but not vice-a-versa
console.log(x["name"]);
console.log(y.name);

// Are Object mutable ?
// Yes
y.name = "Chirag"; // update the object
console.log(y);

// why we cannot acess the value from a key ?
// In an object key are uniques but multiples diffrent keys have same values example :-
let y = {
  name: "Deepanshu",
  age: 27,
  marks: {
    sci: 40, // diffrent key - same value
    maths: 40, // diffrent key - same value
  },
};

// How to add new key or in an object
x.company = "TFT"; // if key isalready present then it wil update the key otherwise it will add a new key
x["company"] = "TFT";
console.log(x);

// delete a key value pairs
// we will use delete operator along with object.key
delete x.company;
console.log(x);
