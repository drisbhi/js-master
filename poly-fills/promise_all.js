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

