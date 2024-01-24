function repeatElement(arr){
    let n = arr.length ;
    let map = {} ;
    for(let i = 0 ; i < n ; i++){
        let currEle = arr[i]
       if( map[currEle]) {
          return currEle; 
       }else{
           map[currEle] = true; 
       }
   }
}
const originalArray = [3, 1, 2, 4, 5, 2, 6, 7];
console.log(repeatElement(originalArray));