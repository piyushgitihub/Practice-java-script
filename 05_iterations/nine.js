const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce( function (accumulator, currentValue) {
//     console.log(`accumulator : ${accumulator} and currentValue : ${currentValue}`)
//     return accumulator + currentValue
// }, 0 );

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0 )

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 5999
    },
    {
        itemName: "py course",
        price: 4999
    },
    {
        itemName: "data science course",
        price: 9999
    },
    {
        itemName: "ai/ml course",
        price: 8999
    },
]

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceTopay);