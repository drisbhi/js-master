
function countBy(arr , args){
 console.log(typeof args , 'value') 
 let newObj = {};
 for( let i = 0 ; i< arr.length ; i++){
    let value = typeof args === 'function' ? args(arr[i]) : arr[i][args];
    if(newObj[value]){
        newObj[value]++ ;
    }else{
        newObj[value] = 1;
    }
 }
 return newObj;
}
let res = countBy([ 1.2 , 2,3 , 2.5 , 8.9] , Math.floor);
console.log(res);


