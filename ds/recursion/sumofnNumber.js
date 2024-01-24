
// This is function method

function sumofN(n){
    if(n===0) return 0 ;
    return n + sumofN(n-1);
}
console.log(sumofN(3))



// This is partition method

function sumNnumber(i , sum){
    if(i< 0){
     console.log(sum);
     return; 
    }
    sumNnumber(i-1 ,sum + i );
  
  }
  sumNnumber(3 , 0)