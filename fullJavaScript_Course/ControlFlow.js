 // if

 const isUserloggedIn = true
 
 if(isUserloggedIn){
    console.log("Executed");
    

 }
 // if else
 const isUserloggedIn2 = false
 if (isUserloggedIn2) {
       console.log("success");
       
 }else{
    console.log("failled!");
    

 }


 // switch
  const month = 3
 switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        
        
        break;
 
    default:
        break;
 }

 // truthy
 const userEmail = "bharat@gmail.com"
 if(userEmail){
    console.log("Got user email");
    
 }else{
    console.log("Don't have user email");
    
 }

 // falsy values
 //false,0,-0, BigInt 0n,"",null,undefined.nan

 // truthy values
 // "0", 'false', " ",[],{},function(){}

 const emptyObj = {}

 if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
 }

 // Nullish Coalescing Operator (??): null undefined
 let val1;
 //val1 =  5 ?? 10
 //val1 =  null ?? 10
 val1 =  undefined ?? 10



 console.log(val1);



 // terniary Operator
 // condition ? true : false

 const ticketPrice = 1000;
 ticketPrice <=200 ? console.log("in range"): console.log("not in range");
 
 
 