// primitive 

// 7 types : string,Number,null,Boolean,undefined,Symbol,BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail; // undefined

const id = Symbol('123')

const anotherId = Symbol('123')
console.log( id === anotherId);


const bigNumber = 12123232323434n // using BigInt

const heros = ["shakti" , "akshay", "mahesh"]
 let myObj ={
    name: "bharat",
    age: 22,
}
const myfunction = function(){
    console.log("hello world");
    
}
console.log(typeof myfunction);


// Refrence (Non primitive)

// Array, Objects, functions
//************************************************************* */

// stack(primitive), heap(Non-Primitive)
// stack  in stack we have copy of value
let myname = "Bharat Dixit"

let anotherName = myname
console.log(anotherName);

anotherName = "Aman Dixit"
console.log(myname);
console.log(anotherName);
//*********************************************** */ // heap   in heap we have reference of value
let user1 ={
    email:"sajnsdnnjd@gmail.com",
    upi : "dhsfjf@ibl.com"
}

let user2 = user1;

user2.email = "bharat0102@gmail.com"
console.log(user1.email);
console.log(user2.email);


