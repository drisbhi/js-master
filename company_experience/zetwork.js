function calValue(data, key, myKey = '') {
    let res = [];
    for (let i = 0; i < data.length; i++) {
        const obj = data[i];
        for (let prop in obj) {
            if (typeof obj[prop] === 'object') {
                res = res.concat(calValue([obj[prop]], key, myKey + prop + '.'));
            } else if (myKey + prop === key ) {
                res.push(obj[prop]);
            }
        }
    }
    return res;
}

const data = [
  {
    a: 1,
    b:{
      c: 2,
    }
  },
  {
   a: 1,
    b: 2,
    c: {
      d : 3
      } 
  },
   {
    a: 2,
    b:{
      c: 4,
    }
  },
];

const key = 'b.c';
console.log(calValue(data, key));