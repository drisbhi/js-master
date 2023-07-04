const flattenObj = (obj , parent)=>{
    let finalObj = {}
    function iteratioNestedObj(obj , parent){
      for( key in obj){
        let newParent = parent + key;
        let value = obj[key];
        if( typeof obj[key] === 'object'){
            iteratioNestedObj( obj[key] , newParent+".")
        }else{
          finalObj[newParent]= value;
        }
      }
    }
    iteratioNestedObj(obj , parent);
    return finalObj;

}

const obj = {
    A: '12',
    B: 9,
    C: {
        D:21,
        E:{
            F: [1,2],
            G:{
                H:11,
            }
        }
    }
}
console.log(flattenObj(obj , ""));