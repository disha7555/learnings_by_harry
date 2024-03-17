//Primitive objects


//remember: nn bb ss u
//datatypes: object,number,boolean,bigint,string,symbol,undefined
let a = null;
let b = 345;
let c = true; //can also be false
let d = BigInt("567") + BigInt("3");
let e = "harry";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

//non primitive datatypes - objects in javascript

const item={
    "a1":true,
    "b1":false,
    "c1":67,
    "d1":undefined
}
console.log("a1 is "+item["a1"]);