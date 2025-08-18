const user = {
    username: "piyush",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username} ,welcome to the website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "milu"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "pranay"
//     console.log(this.username);
// }

// chai()

// const shai = function (){
//     let username = "pranay"
//     console.log(this.username);
// }


// const shai = () => {
//     let username = "pranay"
//     console.log(this);
// }

// shai()


//++++++++++++++++++++ ARROW FUNCTON ++++++++++++

// () => {}

// const addTwo = (num1 , num2) => {
//     return num1 + num2 ;  
// }

// console.log(addTwo(4, 9));

//+++++++++++ implecit return in arrow function +++++++++++

// const addTwo = (num1 , num2) =>  num1 + num2 ;  

// const addTwo = (num1 , num2) =>  (num1 + num2 ); 

const addTwo = (num1 , num2) =>  ({username: "piyush"}) ; 

console.log(addTwo(4, 9));

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
