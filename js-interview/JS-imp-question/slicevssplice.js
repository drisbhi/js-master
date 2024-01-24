let arr = [3,4,5,2,8,9]
let newArr = arr.slice(1, 5);
let secArr = arr.splice(2)
console.log(newArr);
console.log(secArr);

/*
output
[ 4, 5, 2, 8 ]
[ 5, 2, 8, 9 ]

What is the difference between slice and splice?

The slice() method returns a new array with a copied slice from the original array.
The first optional argument is the beginning index and the second optional argument is the ending index
(non-inclusive).(immutable)

The splice() method changes the content of the array in place and can be used to add or remove items from
the array. When only one argument is provided, all the items after the provided starting index are removed
from the array(mutable)
*/
 