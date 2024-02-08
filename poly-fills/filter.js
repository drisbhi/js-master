let arr = [ 3,4,5,6,9]; 
let res = arr.filter( item => item > 3);
console.log(res);
Array.prototype.myFilter = function(callback){
    let newArr = [];
    for(let i = 0 ; i < this.length ; i++){
        if(callback(this[i])){
            newArr.push(this[i]);
        }
    }
    return newArr; 
}
let a = [5,3,6,8,9,0];
let myRes = a.myFilter(item => item > 3);
console.log(myRes); 