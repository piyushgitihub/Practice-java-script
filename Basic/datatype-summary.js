// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('143')
const anotherId = Symbol('143')

// console.log( id === anotherId)

const bigNumber = 2334335345234534534556n // n is used because it refer to BigInt

// Referrence (non-primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "milu",
    age: 18,

}

// const myFunction () => {}
const myFunction = function(){
    console.log("Hello world")
};

let myYTname = "lovely"

let anotherName = myYTname;
anotherName = "toki"


console.log(anotherName)
console.log(myYTname)

let user = {
    email: "noob@gmail.com",
    upiId: "pop@ybl"
}

let user0 = user

user0.email = "pro@gmail.com"

console.log(user)
console.log(user0)
