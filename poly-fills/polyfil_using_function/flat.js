function myFlat(arr){
    let newArr = []; 
    for(let i = 0 ; i < arr.length ; i++){
      if(Array.isArray(arr[i])){
        console.log(myFlat(arr[i]) , "checking data"); 
        newArr = newArr.concat(myFlat(arr[i]));
        console.log(newArr , "After data"); 
      }else{
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  let arr = [ 1,2,3,[4,5],6];
  console.log(myFlat(arr));