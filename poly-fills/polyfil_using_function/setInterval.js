// setInterval using setTimeout  -----> polyfill 


function createSetIntervalPolyfil(){
    let intervalId = 0 ; 
    let intervalMap = {};
    function setIntervalPolyfil(callbackfn , delay=0 , ...args){
        intervalId++;
      function repeat(){
           intervalMap[intervalId] = setTimeout(()=>{
            callbackfn(...args);
            if(intervalMap[intervalId]){
                repeat();
            }
        } , delay)
      }
      repeat();
      return intervalId;
    }
      function clearIntervalPolyfil(intervalId){
        clearTimeout(intervalMap[intervalId]);
        delete intervalMap[intervalId];
    }
    return{
       clearIntervalPolyfil ,
        setIntervalPolyfil
    }
}



const {
    clearIntervalPolyfil,setIntervalPolyfil
} = createSetIntervalPolyfil();

var counter = 0 ;
let timerId ;
function greeting(){
    counter++;
    console.log("hello ! testing");
    if(counter>3){
        clearIntervalPolyfil(timerId);
    }
}
timerId = setIntervalPolyfil(greeting , 1000);