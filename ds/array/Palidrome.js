function Palidrome(x){
    if(x < 0) {
        return false; 
    }
    let convertintoString = x.toString().split("").reverse().join("");
     if(x === +convertintoString) return true
     else{
         return false;
     }
}
const res = Palidrome(141);
console.log(res);