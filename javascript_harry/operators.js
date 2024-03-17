//Operators


//arithmetic operators
let a=10;
let b=2;
console.log("add",a+b);
console.log("sub",a-b);
console.log("mul",a*b);
console.log("div",a/b);
console.log("expo",a**b);
console.log("postincre",a++);
console.log("a",a);
console.log("preincre",++a);
console.log("postdecre",a--);
console.log("presecre",--a);

//assignment operator 
console.log("increassign",a+=5);
console.log("decreassign",a-=5);
console.log("divassign",a/=1);
console.log("mulassign",a*=2);
console.log("raisetoassign",a**=2);

//comparison operator
let c=6;
let d="6";
console.log("c==d",c==d);
console.log("c===d",c===d);//it also checks that c and d's types are same or not 
console.log("c!=d",c!=d);
console.log("c>d",c>d);
console.log("c<d",c<d);
console.log("c<=d",c<=d);
console.log("c>=d",c>=d);

//logical operator 
let x=5;
let y=6;
console.log(x<y && x<=5);
console.log(x>y || x<=5);
console.log(!(x<y && x<=5));

//ternary operator
var disha=21;
console.log(disha>20?"congrats":"best of luck");