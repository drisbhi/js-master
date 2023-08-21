// Output:

// *
// **
// ***
// ****
// *****

 //  Solve this pattern in JavaScript
 
 function Pattern2(n){
    for(let i = 1 ;i <= n ; i++ ){
      let res = "";
       for( let j = 1; j <= i ; j++){
         res += "*" 
       }
      console.log(res);
    }
  }
  Pattern2(5)