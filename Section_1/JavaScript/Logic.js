console.log("Hello World!");
var x = 40
//Reassign is possible in var
var x = 30
//Reassign is possible in var
x=50
console.log(x)

let y=90
//Redeclaration is not possible in let
//let y = 40
//Reassign is possibe in let
y = 50
console.log(y)


//redeclaration is not possible in const


console.log("------------------------")
//local scope 
let num = 10
console.log(num)

if(true){
    let num = 20
    console.log(num)
}
console.log(num)


console.log("------------------------")
//Global scope 
var num1 = 10
console.log(num1)

if(true){
    var num1 = 20
    console.log(num1)
}
console.log(num1)




















