// singleton

// object literal

const mySym = Symbol("key1")

const JsUser = {
    name: "Piyush",
    "fullname": "piyush Hansda",
    age: 18,
    [mySym]: "mykey1",
    location: "Jaipur",
    email: "piyush@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser ["fullname"]);
// console.log(JsUser[mySym]);

JsUser.email = "lolu@gpt.com"
// Object.freeze(JsUser)
JsUser.email = "noob@hotmail.com"
// console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello Js user");
}

JsUser.greetings2 = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetings2());