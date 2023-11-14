function printSubString(inp, out) {
  if (inp.length === 0) {
    return [out];
  }

  let out1 = out;
  let out2 = out + inp[0];

  // Concatenate the results of the recursive calls
  let result1 = printSubString(inp.slice(1), out1);
  let result2 = printSubString(inp.slice(1), out2);

  return result1.concat(result2);
}

let inp = "abc";
let out = "";
console.log(printSubString(inp, out));
/*
 output :- 
 [
    '',   'c',   'b',
    'bc', 'a',   'ac',
    'ab', 'abc'
  ]
 */
