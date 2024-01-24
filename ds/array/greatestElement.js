// Finding the greatest element of an integer array
function findGrtEle(arr){
    let large = arr[0];
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] > large){
            large = arr[i];
        }
    } 
    return large; 
    }
    const integerArray = [12, 5, 27, 8, 16, 4, 20, 14];
    console.log(findGrtEle(integerArray));