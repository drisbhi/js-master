console.log("First Class Function");
// A programming language is said to support First class function , if

// 1. A function can be assigned to a variable,
// 2. A function can be passed as an argument,
// 3. A function can be returned from other function.

// A function can be assigned to a variable
const greet = function (name) {
  console.log(`${name}`, "Hello Buddy");
};
greet("Himanshu");

// A function can be passed as an argument
const greet2 = function () {
  return new Date().getHours() < 12 ? "Good Morning" : "Good Evening";
};
function greetName(greetMsg, name) {
  console.log(`${greetMsg()}`, name);
}
greetName(greet2, "Sahib");

// A function can be returned from other function
// A function which is returned from other function is called “Higher order function”.
const greet3 = function (name) {
  return function () {
    console.log(`${name}`, "Hello Buddy What's Up");
  };
};
greet3("Sahib")();
