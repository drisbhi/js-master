const flattenArray = (arr)=>{
    return  arr.reduce((prevValue , currentValue)=>{
          if(Array.isArray(currentValue)){
              prevValue = prevValue.concat(flattenArray(currentValue));
          }else{
           prevValue.push(currentValue);
          }
          return prevValue;
  
      } , [])
  
  }
  console.log(flattenArray([[1,[1.1] , 2,3] , [4,5]]));