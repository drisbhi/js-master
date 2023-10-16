function printPattern(rows) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = rows - 1; i >= 0; i--) {
    let line = "";

    for (let j = i; j < rows; j++) {
      line += alphabet[j];
    }

    console.log(line);
  }
}

printPattern(5);

/**
output :- 
E
DE
CDE
BCDE
ABCDE
 */
