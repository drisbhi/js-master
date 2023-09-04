// Interpolated strings means we can embed expressions directly inside the string which
//  will be evaluated during runtime.
// `` if you are using this symbol to intialiize string then js consider it as string
// interpolation which means during run time u can write js inside the string using
//  this ${} this symbol and it evaluated js at runtime.
let example = `String Interpolation ${4 + 5 - 8}`;
console.log(example);

// example 2
let name = "Ash";
const company = "Walmart";
let years = 2;
const str1 = `${name} works in ${company} for ${years} years.`;
console.log(str1);
