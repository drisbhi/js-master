
function nestedObj(obj , str){
    if( typeof obj !== "object" ||  obj === null) return obj;
    let temp = {};
    for( let key in obj){
      if(typeof obj[key] === "object"){
        let newStr = str + key + '_';
        let res = nestedObj(obj[key] , newStr)
        temp = { ...temp , ...res };
      }else{
        let newStr = str + key;
        temp[newStr] = obj[key]
      }
    }
    return temp;  
  }
  
  function nestedObj2( obj , resKey){
    let newKey = resKey.split("_");
    for( let i = 0 ; i < newKey.length ; i++){ 
        let key = newKey[i];
        obj=obj?.[key] 
    }
    return obj; 
  }
  
  
  const  dummy = {
     "mohit": {
         "address": {
             "city": null,
             "pinCode": "11027",
             "state": "fbvf"
         }
     },
     "rohit":  {
         "adress": {
             "city":'dklfk',
             "pinCode": "11027",
             "state": "fbvf"
         }
     }
 }
 
 let res = nestedObj2(dummy , "mohit_adrress_pinCode"); 
 console.log(res);
 