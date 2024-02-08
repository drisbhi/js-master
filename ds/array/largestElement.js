// Finding the greatest element of an integer array 

function greatElement (arr){
    let large = arr[0];
    for(let i = 1 ; i< arr.length ; i++){
        if(arr[i] > large){
            large = arr[i];
        }
    }
    return large; 
   }
   let arr = [ 3,4,5,6,9]; 
   console.log(greatElement(arr));