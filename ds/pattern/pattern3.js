// Output:
/*
      *
     **
    ***
   ****
  *****
 ******
*******
*/

 //  Solve this pattern in JavaScript

function Pattern3(n){
    for(let i = 1 ;i <= n ; i++ ){
      let res = "";
      let spaces = n-i; 
      // loop for adding spaces first 
      // for calculating spaces we use n-i
       for( let j = 1; j <=spaces  ; j++){
         res += " " 
       }
       let stars = i ; 
       // this loop to add stars after spacing 
      for( let col = 1; col <=stars  ; col++){
         res += "*" 
       }
      console.log(res);
    }
  }
  Pattern3(7)