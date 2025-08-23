const myObject = {
    js: 'javascript',
    cpp:' C++',
    py: 'python',
}

for (const key in myObject) {
    //console.log(`${key} for shortcut is ${myObject[key]}`)
}

const myarr = ["piyush", "cpp", "java","pyton"]

for (const key in myarr) {
   // console.log(myarr[key])
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of Anerica")
map.set('Fr', "France")

for (const key in map) {
    console.log(map[key])
}

// because its not iterable