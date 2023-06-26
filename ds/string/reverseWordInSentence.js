function reverseSen(sen , left , right){
    
    if( !sen || sen.length < 2 )return;
    while(left < right){
               let temp = sen[left]
        sen = sen.substr(0, left) + sen[right] + sen.substr(left+1)
        sen = sen.substr(0, right) + temp + sen.substr(right+1)
        left++
        right--;
    }
   
    return sen;
}

function reverseWords (sentence){
   let left= 0 ; let right = 0 ; 
   sentence = sentence.split('').reverse().join('');
    
   while(true){
       while(sentence[left] === " ")left++;
       if( left >= sentence.length  ) break;
       right = left + 1;
      while( right < sentence.length &&  sentence[right] != " ")right++;
      sentence = reverseSen(sentence , left , right-1);
      
      left = right ;
   }
   
   return sentence;
}

let sentence = "I love java";
//console.log(sentence);
console.log(reverseWords(sentence));