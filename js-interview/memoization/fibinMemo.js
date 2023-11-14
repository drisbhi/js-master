// fibonacci series using memoization Implementation 
function fibonacci(num , cache) { 
    cache = cache ||  {}; 
   if(cache[num]) return cache[num];
if (num <= 1) return 1;   
return cache[num] =  fibonacci(num - 1 , cache) + fibonacci(num - 2 , cache);
}
let res = fibonacci(4 , {})
console.log(res); 
console.log(res); 