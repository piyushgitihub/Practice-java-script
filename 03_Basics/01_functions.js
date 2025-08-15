
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

// console.log(loginUserMessage())

function calculateCartPrice(val1, val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 600, 3000))

const user = {
    username: "piyush",
    price: 4000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 300, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 300, 800]))