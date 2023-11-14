/*
 In computing, memoization or memoization is an optimisation technique used primarily to speed up
 computer programs by storing the results of expensive function calls and returning the cached
 result when the same inputs occur again.

In simple words, rather executing a code snippet repeatedly to perform a particular task, we can
save the results of previous computation and use it later to avoid unnecessary computation.

Let’s start with a simple example, let’s create a function named add that adds number 10 to parameter
that is passed as an argument.

const addTen = function(num){
      return num + 10;
}
console.log(addTen(20)) //Output of this would be 30


Say you call the same function with same argument for 3 times, like snippet below.

const addTen = function(num){
      return num + 10;
}
console.log(addTen(20)) //Output of this would be 30
console.log(addTen(20)) //Output of this would be 30
console.log(addTen(20)) //Output of this would be 30


Observe the pattern here, every-time, same argument is being passed and same process is carried out
inside the addTen function, in this scenario computing the same code again and again is of no use.
Rather, we can save the result of the computation and if the parameter that is passed is already
known to the snippet then rather freshly computing saved result can be returned as shown below.

let cache = {};
const addTen = function(num){
        if(num in cache){
          console.log("Inside Memoization block")
          return cache[num]
        }else{
          console.log("Inside Regular execution block")
          cache[num] = num + 10;
          return cache[num]
        }
}
console.log(addTen(20))
console.log(addTen(20))
Output of above snippet would be

Inside Regular execution block
30
Inside Memoization block
30

As you might have guessed, first time the addition has happened and further on memoization block
is executed. This saves complex computation by saving the results. In interview if the question
asked like what is memoization explain with a snippet ? Then write the above code, it is simple
and easy to explain, you can even spice it with closures and inner functions if your aware
of the concept.


 */