//Polyfill -> Promise.All();

Promise.myAll = (promises) => {
    return new Promise((rs, rj) => {
      // counter
      let count = 0
      // Storage results
      let result = []
      const len = promises.length
      
      if (len === 0) {
        return rs([])
      }
      
      promises.forEach((p, i) => {
        // Some array items may not be Promise and need to be converted manually
        Promise.resolve(p).then((res) => {
          count += 1
          // Collect the return value of each Promise 
          result[ i ] = res
          // Set the value of Promise to result, when all Promises are successful
          if (count === len) {
            rs(result)
          }
          // As long as one promise fails, the result is failure
        }).catch(rj)
      })
    })
  }
  
  const p1 = Promise.resolve(1);
  const p2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
  const p3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));
  const p4 = Promise.reject('err4');
  const p5 = Promise.reject('err5');
  
  // Test cases
  const p11 = Promise.myAll([p1, p2, p3])
      .then(console.log) // [1, 2, 3]
      .catch(console.log);
  
  const p12 = Promise.myAll([p1, p2, p4])
      .then(console.log)
      .catch(console.log); // err4
  
  const p13 = Promise.myAll([p1, p4, p5])
      .then(console.log)
      .catch(console.log); // err4






      // const myPromise =(arr)=>{
      //   let newArr = [ ]; 
      //  return new Promise((res , rej)=>{
      //    for( let i = 0 ; i < arr.length ; i++){
      //    Promise.resolve(arr[i]).then((data) =>  { if(newArr.length === arr.length - 1 ) {res(newArr)} newArr.push(data) }).catch((err) => rej(err));
      //   }
      //  })
      // }
      
      // let p1 = Promise.resolve("First")
      // let p2 = Promise.resolve("Second")
      // let p3 = Promise.resolve("Third")
      //  let p4 = Promise.reject("Four")
      //  myPromise([p1,p2, p4]).then((data) =>  console.log(data)).catch(err => console.log(err)); 





 const myPromise = (arr) =>{
  let newArr = [ ]; 
 return new Promise((res , rej)=>{
   for( let i = 0 ; i < arr.length ; i++){
   Promise.resolve(arr[i])
   .then((data) =>  res(data))
   .catch((err) => {
     newArr.push(err); 
     if(newArr.length === arr.length){
       rej(newArr)
     }
   })
  }
 })
}

let p1 = new Promise((res , rej)=>{
  setTimeout(function() {
    rej("Error")
  }, 1000);
})
let p2 = new Promise((res , rej)=>{
  setTimeout(function() {
    rej("Second")
  }, 100);
})
let p3 = new Promise((res , rej)=>{
  setTimeout(function() {
    rej("Third")
  }, 50);
})
 myPromise([p1,p2,p3]).then((data) =>  console.log(data)).catch(err => console.log(err)); 


