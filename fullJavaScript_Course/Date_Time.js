// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());

console.log(typeof myDate);

let myCreatedDate = new Date(2024,0,23);
console.log(myCreatedDate.toDateString());
let myCreatedDate1 = new Date("2023-01-14");
console.log(myCreatedDate1.toDateString());


// timeStamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
      weekday: "long",

})





