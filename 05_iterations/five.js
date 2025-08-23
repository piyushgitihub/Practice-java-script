const coding = ["js", "ruby", "java", "python","cpp"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach( (val) => {
//     console.log(val)
// })

// function printMe(val) {
//     console.log(val);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "python",
        languageFileName: "py",
    },
    {
        languageName: "java",
        languageFileName: "java",
    },
]

myCoding.forEach((item)=> {
    console.log(item.languageFileName)
})