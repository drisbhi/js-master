//Polyfill -> Promise.All();



const dummyApi = (time)=>{
    const promise = new Promise((res , rej)=>{
        setTimeout(()=>{
           res(time);
        }, time)
    })
    return promise;
}

const taskArray = [dummyApi(1000) ,dummyApi(2000),dummyApi(3000)];

const promiseAll = (taskArray)=>{
    return new Promise( (res , rej)=>{
       let output = [ ];
       taskArray.forEach( (element , i)=> {
          element.then((data)=> {
            output[i]= data;
            if(i === taskArray.length-1){
                res(output);
            }
          }).catch((err)=> err);
       });
    })

}

 promiseAll(taskArray).then((data)=> console.log("data" , data)).catch((err)=>  console.log("err" , err));