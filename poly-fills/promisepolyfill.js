const STATE ={
    PENDING : "pending",
    FULFILLED : "fulfilled",
    REJECTED : "rejected",
}
class myPromise {
   #data;
   #state = STATE.PENDING
   #thencb = []
   #catchcb = []

    constructor(cb) {
        cb(this.#resolve.bind(this), this.#reject.bind(this));
        return this;
    }
    
    #resolve(data) {
        
        if(this.#state !== STATE.PENDING) return;
         
        this.#data = data;
        this.#state = STATE.FULFILLED
        this.#runCallBacks()
        
    }
    #reject(data) {
        
        if(this.#state !== STATE.PENDING) return;
       
        this.#data = data;
        this.#state = STATE.REJECTED
        this.#runCallBacks()
    }
    #runCallBacks () {
      if(this.#state === STATE.FULFILLED) {
         this.#thencb.forEach((cb) => cb(this.#data));
         this.#thencb = []
      }
      if(this.#state === STATE.REJECTED){
         this.#catchcb.forEach((cb) => cb(this.#data)); 
         this.#catchcb = []
      }
    }
     then(cb) {
         this.#thencb.push(cb)
         this.#runCallBacks()
         return this;
    }

    catch(cb) {
        this.#catchcb.push(cb)
        this.#runCallBacks()
        return this;
    }
}

let my  =  new myPromise((res, rej) => { 
  setTimeout(()=> {
     rej("7") 
  },1000)
 
}).then((data) => {  console.log(data)
}).catch((err) => console.log(err)).then((item)=> console.log(item));


/* 
Note :- Some edge cases are still missing in this code
*/