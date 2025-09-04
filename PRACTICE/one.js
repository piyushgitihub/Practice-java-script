// ARRAY " an empty array"

// const a = []
// console.log(a)

// initialization of array

// const b = [10, 20, 30, 40]
// console.log(b)


// 

// const num = 101

// if(num <= 100){
//     console.log("Number")
// } else{
//     console.log("Big Number")
// }

// function

// function sum(x, y){
//     return x + y;
// }

// console.log(sum(5, 9))

// function mul(a, b){
//     return a * b;
// }

// console.log(mul(8, 9))

// let x = 20;
// let y = 50;
// let z = x + y;

// console.log(z)

// accessing last element of the array

// const myarr = ["HTML", "CSS", "JS", "PY"]

// let last = myarr[myarr.length - 1]

// console.log("Last Element : " , last)

// Modify the array element

// const hero = ["IRON MAN", "FLASH", "THOR", "SUPER MAN"]
// console.log(hero);

// hero[1] = "HULK";
// console.log(hero);

// Adding element to the array 

// let num = [10, 20, 30 ,40]

// // adding element to the end of the array
// num.push(50);

// // adding element to the beginning of the array
// num.unshift(0);

// console.log(num)

// remove array from the list or array

let num = [10, 20, 30 ,40] 
console.log("Orifginal array: " + num);

// removes and returns the last element
let lst = num.pop();
console.log("After removing the last : " + num);

// removes and returns the first element
let fst = num.shift();
console.log("After removing the first : " + num);

//removes two index 
num.splice(2, 3);
console.log("After removing two element : " + num);
