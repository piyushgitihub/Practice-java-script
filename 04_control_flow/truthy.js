const userEmail = "p@pranay.ai"

// if (userEmail) {
//     console.log("Got user Email")
// } else {
//     console.log("Don't have user Email")
// }

//falsy value

// false, 0, -0, BigInt 0n, "" , null, undefined, NaN

//truthy values

//"0", 'false', " ", [], {}, function()  {}

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty")
}

//Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 4 ?? 9
// val1 = null ?? 9
// val1 = undefined ?? 9
//  val1 = null ?? 9 ?? 60
 val1 = null ?? undefined

console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")