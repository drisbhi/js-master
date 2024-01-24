function misingElement(arr){
    let n = arr.length + 1;
    let totalSum = ( n * (n+1))/2 ; 
    let sum = arr.reduce((sum , num) => sum+num , 0 ); 
    let missNumber = totalSum - sum ; 
    return missNumber; 
}
const originalArray = [1, 2, 3, 5, 6, 7, 8, 9, 10];
console.log(misingElement(originalArray));


/*
In this question we can calculate the total Sum by using this formula  sum = (n *(n+1))/2 ; 
*/