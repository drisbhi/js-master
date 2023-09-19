// Higher order function
// This are function that depends and operate on other functions . Higher
// order function takes another function as an arguments  or return
// a function and then execute the logic.

/**
 * Map function
 * map is the higher order function available with arrays
 * it takse function as an argument -> f
 * it return an array in which every value is actually populated by calling
 * function f with original array element in an array.
 *
 * map function internally loops/iterate over every elements of the given original array pass that element
 * in the argumant function f and then stored the retured value inside an array.
 **/
function sq(ele) {
  return ele * ele; // return sqaure
}
let arr = [1, 4, 5, 3];
const result = arr.map(sq); // sq is a fun passed as argument
console.log(result);

/** whare to use maps ?
 * In a situation when we have to  do an operation on every element of array and store the result
 * of each operation  then map can be a good option.
 * for example : Array of product objects.
 */

const a = [1, 4, 5, 6];

function print(ele, idx) {
  return `Element of  an ${idx} is ${ele}`;
}

// here map is looping over an every element and then passing ele , index in function print.
const res = a.map(print);
console.log(res);
/**
 * if function that we are passing in map takes two arguments then first argument will be  asgin the actual
 * value and second argument will be accessing index of that value.
 */

//  how to create a custom map function

function customMap(arr, fun) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(fun(arr[i], i));
  }
  return resultArr;
}

const customRes = customMap(a, print);
console.log(customRes);

/**
 * filter -> it is also a HOF
 * Filter also loop over a array elements
 * there is one special thing about filter i.e  the argument function f which we have to pass inside
 * filter should always return a boolean , otherwise  output will be converted to boolean.
 *
 * filter loops over every element , passes that element in the argument function and if the output of this
 * function call is true, then it stores the original element in a new array otherwise does'nt add this
 * element to the array.
 */

function oddOrEven(x) {
  return x % 2 === 0;
}

let b = [1, 2, 3, 4, 5, 6];
let r = b.filter(oddOrEven);
console.log(r);

/**
 * Reduce function
 * reduce is hof that available for array
 * reduce also take a function  f as a argument,
 * what reducedoes is , it one by one goes to every element of the array,
 * say the current element is arr[i]
 * reduce will pass this element to function f ,and accumulate the result of further function called
 * with this particular result
 */

const arrr = [1, 2, 3, 4, 5, 6];
function sum(prevValue, currValue) {
  return prevValue + currValue;
}

const ress = arrr.reduce(sum);
console.log(ress);

// practical use case of reduce
