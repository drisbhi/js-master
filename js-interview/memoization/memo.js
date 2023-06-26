// memoization important question ?  
// Asked in Zomato 
const memoize=(fn)=>{
    const cache={};
    // cache is used for storing data 
    return(...args)=>{
        const argsTostring = JSON.stringify(...args);
        // convert into string ---> bezos we dont know what type of arguments will come.
        if(argsTostring in cache){
            console.log("Computed result",argsTostring)
            return cache[argsTostring];
        }else{
            console.log("fetch result",argsTostring)
           const result = fn.apply(this , args); 
        // apply is used bez'os we dont know how many arguments will come.
           cache[argsTostring] = result
            return result;
        }
    }
}

const addThree = (a,b,c) => a+b+c ;
const memoResult = memoize(addThree);
const factmemoResult = memoize((x)=>{
    if(x===0) return 1
    else return x * factmemoResult(x-1);
});
console.log("Welcome1" ,memoResult(1,2,3) );
console.log("Welcome2" ,memoResult(1,2,3) );
// FACTORIAL EXAMPLE 
console.log("Welcome1" ,factmemoResult(3) );
console.log("Welcome2" ,factmemoResult(4) );

