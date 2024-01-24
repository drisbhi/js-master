
// Reverse a string using recurrsion with reduce HOC.

function reverseString(inputStr){
    let charArr = inputStr.split('');
    const resultArr = charArr.reduce((accumulator , currValue)=>{
        console.log(accumulator , 'accc')
         console.log(currValue , 'currValue')
        return [currValue , ...accumulator];
    })
    
    let reveseStr = resultArr.join('');
    return reveseStr; 
}



const originalString = "Hello, World!";
const reversedString = reverseString(originalString);

console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);