
// let i = 0
// while (i <= 10) {
//     console.log(`value of index is ${i}`)
//     i = i + 2
// }

let myhero = ['thor', 'ironman', 'captain', 'black panther']

let arr = 0 // for value initialization
while (arr < myhero.length){
   // console.log(`my value is ${myhero[arr]}`)
    arr = arr + 1
}

let score = 0
// let score = 11

do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);

// the interesting thing about do while loop is it first check the value then go to condition statement,
// so if some value is given more than the condition statement then it only 
// print the higher value.