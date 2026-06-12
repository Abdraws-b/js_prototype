Number.prototype.sum = function(){
    return this.valueOf() + 2 ;
}

let sumparent = 14;
let sumchild = sumparent.sum();
console.log(sumchild);




Number.prototype.mult = function(){
    return this.valueOf() * 3 ;
}

let part = 3;
let part_second = part.mult();
console.log(part_second);





Number.prototype.subt = function(){
    return this.valueOf() - 5 ;
}

let bignum = 15 ;
let subresult = bignum.subt();
console.log(subresult);
