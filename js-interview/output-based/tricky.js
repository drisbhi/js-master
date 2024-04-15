

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), 0)
//   }
  
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), 0)
//   }

// const createPromise = () => Promise.resolve(1)

// function func1() {
//   createPromise().then(console.log)
//   console.log(2)
// }

// async function func2() {
//   await createPromise()
//   console.log(3)
// }

// console.log(4)
// func1()
// func2()





// console.log([0] == '')
// console.log([0] == 0)

// var a = 'BFE';
// let b = 'bigfrontend';
// console.log(this.a) 
// console.log(this.b)

// let dev = 'bfe';

// function a() {
//   let dev = 'BFE'
//   return function() {
//     console.log(dev)
//   }
// }

// dev = 'bigfrontend';

// a()()


// const obj = new Map();
// const map = new Map();
// obj.foo = 1;
// map.set('foo',2);
// console.log(obj.foo);
// console.log(map.get('foo'));

// const proxyObj = new Proxy(obj , {});
// const proxyMap = new Proxy(map , {});
// console.log(proxyObj.foo);
// console.log(proxyMap.get('foo'));


// let num;

// for (let i = 0; i < 5; i++) {
//   num = i;
//   setTimeout(() => {
//     console.log(num)
//   }, 100)
// }
