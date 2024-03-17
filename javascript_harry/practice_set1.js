//Practice set 1


//Q-1:create variable of type string and add a number to it
let a="disha";
let b=6;
console.log(a+b);


//Q-2:use typeof operator to find the datatype of the string in last question
console.log(typeof (a+b));


//Q-3:create a const obj. in javascript and can you change it later to hold a number?
const s={
    name:"disha",
    section:1,
    isPrincipal:false
}
//s="harry";
//above commented statement will give syntax error (if you try to change const variable's value) but you can refer to key and change it
s['name']="krisha";


//Q-4:try to add new key to const object 
s['friend']="shubham";
console.log(s);


//Q-5:write a js prog. to create word-meaning dictionary of 3 words
const dict={
    appreciate:"recognize the full worth of",
    ataraxia:"a state of freedom from emotional disturbance and anxiety",
    yakka:"work,specially hardwork"
}
console.log(dict.yakka); // or below statement can also be used
console.log(dict['yakka']);