// implement this ----> cal.add(4).multiply(10).sub(12).add(20);

const cal = {
    total : 0 ,
    add : function (a){
        this.total += a ;
        return this
    },
     sub : function (a){
        this.total -= a ;
        return this
    },
     multiply : function (a){
        this.total *= a ;
        return this
    }
}

const result = cal.add(4).multiply(10).sub(12).add(20);
console.log(result.total)