
Array.prototype.myMap=function(callback){
    let newArray= []; 
    for(let i  of this){
        newArray.push(callback(i));
    }
    return newArray;
}


const arr = [1,2,3,4,5]
const res = arr.map((items)=> items *2);
console.log("res" ,res);
const re = arr.myMap((items)=> items *2);
console.log("re" ,re);