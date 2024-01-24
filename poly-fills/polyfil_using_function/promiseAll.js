// Implement promise.All

function showText(name , time){
    return new Promise((res ,rej)=>{
       setTimeout(()=>{
        res(name)
    },time)  
    })
 }
 
 function myPromiseAll(promises){
     let result = [];
     return new Promise((resolve , reject)=>{
         promises.forEach( (p , index)=>{
             p.then((res)=>{
                 result.push(res);
                 if(index === promises.length-1){
                     resolve(result);
                 }
             }).catch((err)=> reject(err))
         })
     })
     
 }
 
 const customPromiseAll = myPromiseAll([showText("sahib" ,1000) , Promise.resolve('hi')]);
 const promiseAlll = Promise.all([showText("sahib" ,1000) , Promise.resolve('hi')] )
 promiseAlll.then(value => console.log(value))
 