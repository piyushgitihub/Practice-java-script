
function sayMyName(){
console.log("P");
console.log("i");
console.log("y");
console.log("u");
console.log("s");
console.log("h");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(8 , 9)

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(6, 9)

// console.log("Result: ", result)

//if(username === undefined) also written as if(!username)

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter an username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("piyush"))

console.log(loginUserMessage())