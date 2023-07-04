function replace(sentence , char , index){
    return sentence.substr(0 , index) + char + sentence.substr(index+1);
}

function removesDuplicates(sentence){
    let arrSet = new Set([]);
    let write = 0;
    let read=0;
    while( read < sentence.length){
      if( !arrSet.has(sentence[read])){
        arrSet.add(sentence[read]);
        sentence = replace(sentence , sentence[read] , write);
       write++ ;
      }
      read++
    }
    return sentence.substr(0,write);
 
}
const sentence = "Hello World";

console.log(removesDuplicates(sentence));