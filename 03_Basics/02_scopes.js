//global scope
// var c = 300
let a = 300

//scope

if(true){ //block scope
    let a = 10
    const b = 20
    //  c = 30
   // console.log("INNER IS: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "piyush"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()


if(true){
    const username = "piyush"
    if(username === "piyush"){
        const website = "youtube"
        //console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//+++++++++++++ Interesting +++++++++

console.log(addOne(6))

function addOne(num){
    return num + 1
}


// addTwo(6)

const addTwo = function(num){
    return num + 2
}
