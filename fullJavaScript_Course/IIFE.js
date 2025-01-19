// Immediately Invoked Function Expressions (IIFE)
 // ignore the globle scope pollution we use IIFE
(function db(){
    console.log("DB CONNECTED");
    
})();

( ()=>{
    console.log("DB CONNECTED TWO");
    
})();  // semicolon use in double iife 
( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Bharat')