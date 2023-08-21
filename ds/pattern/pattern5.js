/*
Output:

*****
****
***
**
*
*/


// solve this in js 

function Pattern5(n){
    for(let i = 1 ;i <= n; i++ ){
      let res = "";
       for( let j = 1; j <= n -i + 1 ; j++){
         res += "*" 
       }
      console.log(res);
    }
  }
  Pattern5(5)