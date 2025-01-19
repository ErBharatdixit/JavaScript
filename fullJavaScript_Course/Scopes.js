
var c = 300
let a = 400


if (true) {
    let a = 10

    const b = 20
    
    var c = 30
    console.log(a);
    
    
}

console.log(a);
//console.log(b);
//console.log(c);

// Scope in nested function
function one(){
    const user = "bharat"
    function two(){
        const website = "youtube"
        console.log(user); // in this only child function access parent variable but viceversa ia not true same for if else statement
        
    }
    //console.log(website);  it is not true
    two();
    
}

one()

 //**********************************  interesting  ***********************************
 console.log( addone(5))   // it also right syntax
function addone(num){
    return num+1
}
 console.log( addone(5))    
 //console.log(addTwo(5)) // it is not valid syntax
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))