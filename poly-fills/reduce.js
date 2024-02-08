let arrr = [ 3,4,5,6,9]; 
let res = arrr.reduce( (prev , curr )=> prev + curr);
console.log(res);
Array.prototype.myReduce = function(callback , currValue){
    let accumulator = currValue !== undefined ? currValue : this[0];
    if(accumulator){
      for(let i = currValue !== undefined ?  0 : 1 ; i< this.length ; i++){
          accumulator = callback(accumulator , this[i])
      }
    }
   return accumulator ; 
}
let a = [5,3,6,8,9,0];
let myRes = a.myReduce( (prev , curr) => curr + prev);
console.log(myRes); 
  
// Alternative 

Array.prototype.myReduce = function (callback , initialValue){
    let accumulator = initialValue;
    for(let i=0 ; i < this.length ; i++){
        if(accumulator){
        accumulator = callback.call(undefined , accumulator , this[i] , i ,this);
    }else{
        accumulator = this[i];
    }
         
    }
    
    return accumulator; 
  }
  
      const arr = [1, 2, 3, 4];
      console.log(arr.myReduce((total, elem) => total + elem));
  
      // Code to calculate multiplication of all array elements
      console.log(arr.myReduce((prod, elem) => prod * elem));




//The call() method is used to call a function with a given this value and arguments provided individually. In the case of the myReduce method, the callback function is called using the call() method and the this value is passed as undefined.

//This is because in this specific implementation of the myReduce method, the this value is not used inside the callback function. Therefore, it doesn't matter what this value is passed to the call() method, and undefined is simply used as a placeholder value.

//By passing undefined as the first argument to call(), the callback function is invoked with this value set to the global undefined value, which is the same as not specifying a this value. The remaining arguments passed to call() are the accumulator, currentValue, currentIndex, and array arguments required by the callback function.

// So, passing undefined in this line simply ensures that the callback function is invoked with the correct arguments, and the this value is not used inside the callback function.




