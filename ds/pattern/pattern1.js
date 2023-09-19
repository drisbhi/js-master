/*
 ****
 ****
 ****
 ****
 */

//  Solve this pattern in JavaScript

function Pattern(n) {
  for (let i = 0; i < n; i++) {
    let start = "";
    for (let j = 0; j < n; j++) {
      start += "*";
    }
    console.log(start);
  }
}
Pattern(4);

// Note :- Concatination of string is important things to remember in this question.
