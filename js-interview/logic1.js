 /*
 Question: How do you display all keys and values in a nested JavaScript object?
*/
 
function displayObject(obj){
    for(key in obj){
         if(typeof(obj[key]) == 'object'){
     displayObject(obj[key]);
      }else{
     console.log( `${key} : ${obj[key]}` );
 } 
    }
}

let obj = {
    name : 'sahib',
    surname : 'bajaj',
    roll_num : 23,
    subject : {
        eng : 89,
        math : 90,
        sci : 98,
    },
}
displayObject(obj);