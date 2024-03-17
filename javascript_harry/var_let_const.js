//var_let_const


//difference between var,const and let
var a=45;
var b="harry";
var c=null
var d=undefined

//var

{
    var b="hiii"//if var 's value is changed it will be applied to program after it within a block or out of block
    //console.log(b)
}
//console.log(b);

//disadvantage of var
var f="abc";
var f=45;
//console.log(f);//it is not giving error when you are making two var with same name ,it is a bug

//let

let e ="disha"//will be applied when out of block or in block if no other values are given to it
{
    let e="shah"
    //console.log(e);//only within the block e's value will be shah 
}
//console.log(e);

//const

const w="a";
//w="b";//will give type error b'coz const can't be changed
//console.log(w);