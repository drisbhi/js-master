// Write a function which deep clones a object

// A deep clone function is used to create a completely independent copy of an object or array,
// including all nested objects and arrays.

function deepCloned(obj){
    if( obj === null  || typeof(obj) !== 'object')return obj;  
    if(Array.isArray(obj)){
        return obj.map((item)=> deepCloned(item));
    }
    let clonedObj = {}; 
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            clonedObj[key] = deepCloned(obj[key]);
        }
    }
    return clonedObj;
  }

// using reduce method 

  function deepClonedusingReduce(obj){
   if( typeof obj !== 'object' || obj === null) return obj;
   let intitalValue = Array.isArray(obj) ? [] : {};
  return Object.keys(obj).reduce((acc , key)=>{
   acc[key] = deepCloned(acc[key]);
   return acc;
  },intitalValue)
  }
  
  const originalObject = {
    name: 'John',
    age: 25,
    hobbies: ['reading', 'coding'],
    address: {
      city: 'Example City',
      zip: '12345',
    },
  };


  const cloneObject = deepCloned(originalObject);
  cloneObject.name = "sahib"; 
  console.log(cloneObject);
  console.log(originalObject); 
  