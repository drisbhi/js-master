
function myMapCustom(arr , callback){
    let result = []; 
    console.log(callback);
    for(let i = 0 ; i < arr.length ; i++){
        result.push(callback(arr[i] , i , arr));
    }
    return result;
}
const arr = [1,2,3,4];
const mapRes = arr.map((val)=> val*2);
const myMap = myMapCustom(arr , (item) => item*2 );
console.log(mapRes)
console.log(myMap)