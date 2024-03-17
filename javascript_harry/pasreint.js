//ParseInt 


const prompt=require("prompt-sync")({sigint:true});
let a=prompt("hey whats your age?");
a=Number.parseInt(a);
console.log(a);
/*if(a>0)
{
    alert("this is a valid age");
}
*/
