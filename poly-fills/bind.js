let basic = {
    'name': 'shyam',
    'age': 24
  };
  
  function callMe(city) {
    console.log('Hi! my name is ' + this.name + ' and my age is ' + this.age + ' and my city is ' + arguments[0] + ' and state is ' + arguments[1]);
  }
  
  
  Function.prototype.myCallBind = function(context , ...args1){
      let fn = this ; 
      return function(...args2){
         return  fn.apply(context , [ ...args1 , ...args2])
      }
  }
  let callBinded = callMe.bind(basic, 'jammu');
  callBinded('j&k')
  let mycallBinded = callMe.myCallBind(basic, 'jammu');
  mycallBinded('j&k')