function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power); 
console.log(multipleBy5.prototype); 

 

function createUser(username, score){
   this.username = username 
   this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
    
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",25)

chai.printMe()

/* prototype */

let myname = 'bharat      '

console.log(myname.length);
let myheros = ["thor","spiderman"]

let heroPower = {
        thor: "hammer",
        spiderman: "sling",
        getSpiderPower: function(){
            console.log(`Spidy power is ${this.spiderman}`)
        }
}

 Object.prototype.bharat = function(){ // we construct our own property
    console.log(`bharat is present in all object`);
    
 }

//heroPower.bharat(  )
myheros.bharat()


/* Inheritance*/
const user = {
    name: "chai",
    Email: "bharat@goole.com"
}
const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment : 'js assignment',
    fullTime: true,
    __proto__: teachingSupport
}
teacher.__proto__ = user // old syntax

// modern Syntax

Object.setPrototypeOf(teachingSupport,teacher)



let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
    
}

anotherUsername.trueLength()

"bharat".trueLength()




