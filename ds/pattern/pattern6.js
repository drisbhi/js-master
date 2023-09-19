/**
 Output:

1 2 3 4 5 6 7 
 2 3 4 5 6 7 
  3 4 5 6 7 
   4 5 6 7 
    5 6 7 
     6 7 
      7 
     6 7 
    5 6 7 
   4 5 6 7 
  3 4 5 6 7 
 2 3 4 5 6 7 
1 2 3 4 5 6 7 
 */
//  print this pattern

function Pattern(n) {
  // first added spaces
  // upper portion of pattern
  for (let row = 1; row <= n; row++) {
    let spaces = row - 1;
    let str = "";
    // loop for spaces
    for (let i = 1; i <= spaces; i++) {
      str += " ";
    }
    let num = row;
    while (num <= n) {
      str += num + " ";
      num++;
    }
    console.log(str);
  }
  // lower portio of pattern
  // first added the spaces
  for (let row = 1; row <= n - 1; row++) {
    let spaces = n - row - 1;
    let str = "";
    for (let i = 1; i <= spaces; i++) {
      str += " ";
    }
    let num = n - row;
    while (num <= n) {
      str += num + " ";
      num++;
    }
    console.log(str);
  }
}
Pattern(7);
