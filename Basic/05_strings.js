const name = "piyush"
const repoCount = 50

// console.log(name + repoCount + " value ");

console.log(`Hello my name is${name} and my repo count is${repoCount}`);

const gameName = new String('piyush-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 5)
// console.log(newString);


const anotherString = gameName.slice(0, 3)
// console.log(anotherString);


const newString1 = "  piyush  "
// console.log(newString1);
// console.log(newString1.trim());

url = "https://piyush.com/piyush%30choudhary"

console.log(url.replace('%30', '_'))

console.log(url.includes('piyush'))

console.log(gameName.split('-'))