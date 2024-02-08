// 1. what is the output of this : -
// console.log( typeof(1 + '1' - 1));

//2. Difference between prototype and __proto__ ?
// The prototype property is an attribute associated with constructor functions in JavaScript.
//  Constructor functions are used to create objects in JavaScript. When you define a constructor function,
//   you can also attach properties and methods to its prototype property. These properties and methods
//    then become accessible to all instances of objects created from that constructor. Thus, the prototype
//     property serves as a common repository for methods and properties that are shared among instances.

// Consider the following code snippet:

// Constructor function
function Person(name) {
  this.name = name;
}

// Adding a method to the prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

// Creating instances
const person1 = new Person("Haider Wain");
const person2 = new Person("Omer Asif");

// Calling the shared method
person1.sayHello(); // Output: Hello, my name is Haider Wain.
person2.sayHello(); // Output: Hello, my name is Omer Asif.
// In this example, we have a constructor function named Person. By extending the Person.prototype
// with a method like sayHello, we're adding this method to the prototype chain of all Person instances.
//  This allows each instance of Person to access and utilize the shared method. Instead of each instance
//   having its own copy of the method.

// On the other hand, the __proto__ property, often pronounced as "dunder proto," exists in every
// JavaScript object. In JavaScript, everything, except primitive types, can be treated as an object.
//  Each of these objects has a prototype, which serves as a reference to another object.
//  The __proto__ property is simply a reference to this prototype object. The prototype object is used
//  as a fallback source for properties and methods when the original object doesn’t possess them.
//  By default, when you create an object, its prototype is set to Object.prototype.

// When you attempt to access a property or method on an object, JavaScript follows
//  a lookup process to find it. This process involves two main steps:

// Object’s Own Properties: JavaScript first checks if the object itself directly possesses the desired
//  property or method. If the property is found within the object, it’s accessed and used directly.
// Prototype Chain Lookup: If the property is not found in the object itself, JavaScript looks at the
//  object’s prototype (referenced by the __proto__ property) and searches for the property there.
//  This process continues recursively up the prototype chain until the property is found or until the
//  lookup reaches the Object.prototype.
// If the property is not found even in the Object.prototype, JavaScript returns undefined, indicating
// that the property does not exist.

//3
let a = {};
let b = { key: "test" };
let c = { key: "test" };

a[b] = "123";
a[c] = "456";

console.log(a);

// 4.  what is the output of this ?
console.log([] == ![]);
// 0== 0 true

// note :-   https://levelup.gitconnected.com/8-advanced-javascript-interview-questions-for-senior-roles-c59e1b0f83e1

// 5 what is the output of this ?
function lang(name) {
  name.lan = "hindi";
}
var myLang = { langname: "English" };
var x;
lang(myLang);
x = myLang.langname;
console.log(x);

//6 what is the output of this

if (true || true) {
  if ((false && true) || false) {
    console.log("A");
  } else if ((false && false) || (true && true)) {
    console.log("B");
  } else {
    console.log("C");
  }
} else {
  console.log("D");
}
