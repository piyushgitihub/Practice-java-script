//global scope
// var c = 300
let a = 300

if(true){ //block scope
    let a = 10
    const b = 20
    //  c = 30
    console.log("INNER IS: ", a);
}


console.log(a);
// console.log(b);
// console.log(c);