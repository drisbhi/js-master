function myFilter(arr, cb){
 let newArr = []; 
 for(let i = 0 ; i < arr.length;i++){
     if(cb(arr[i])){
        newArr.push(arr[i]);
     }
 }
 return newArr;
}


let arr = [ 1,2,3,4,5]
let findEven = arr.filter((item)=> item%2 === 0);
console.log(findEven);
arr = [ 1,2,3,4,5];
let findOdd = myFilter( arr , (item) => item%2 !== 0);
console.log(findOdd);

