//  question 1  creates currying function that accepts 5 arguments ? 

const ARGS_LEN = 5;
const sum = (...args)=>{
    if(args.length === ARGS_LEN ){
       return args.reduce((intialValue , currentValue)=> intialValue + currentValue)
    }else{
       let recursive=(...args2)=>{
        args= args.concat(args2);
        if(args.length === ARGS_LEN ){
            return args.reduce((intialValue , currentValue)=> intialValue + currentValue)
         }else{
            return recursive;
       }
       
    }
    return recursive ; 

}}

console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3,4,(5)));
console.log(sum(1,2,3)(4,5));


// Question 2 creates currying function that return sum of previous value ? 

const currying = ()=>{
    let prev = 0 ; 
    return (newValue = 0)=>{
        prev += newValue;
        return prev
    }
};

const sum1 = currying();
console.log(sum1(1));
console.log(sum1(3));
console.log(sum1(4));



// Question 3 creates a curring function console.log(add(3)(4)(6)(8)()); 
function add(a){
    return function(b){
        if(b){
            return add(a+b);
        }
        return a;
    }
}
 console.log(add(3)(4)(6)(8)());