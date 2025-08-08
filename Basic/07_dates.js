//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2025, 7, 8)
// console.log(myCreatedDate.toDateString());

let anotherDate = new Date(2025, 7, 8, 6, 45)
// console.log(anotherDate.toLocaleString());

// let mDate = new Date("17-08-25")

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate);
// console.log(myDate.getDay());

// `${newDate.getDay()}`

newDate.toLocaleString('default', {
    weekday:"long"
})