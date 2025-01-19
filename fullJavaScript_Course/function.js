function myname(){
    console.log("bharat");
    
}

myname()
// function for add two numbers
function addtwonumbers(number1,number2){
     let ans =number1 + number2
     return ans
     
}
   const result = addtwonumbers(2,3)
   //console.log(result);

   function loginUserMessage(username){
    if(username === undefined  ){
        console.log("please enter a username");
        
    }
    return `${username} just logged in`
   }
  // console.log(loginUserMessage());

  function calculateCarPrice(...num1){
    return num1
  }

 // console.log(calculateCarPrice(200, 400, 500))
  function calculateCarPrice1(val1, val2, ...num1){
    return num1
  }
  //console.log(calculateCarPrice1(200, 400, 500,2000))
   
   const userv= {
    username: "Bharat",
    price: 199
   }

   function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
   }
   handleObject(userv)

   const newArray = [200,300,400,500]

   function returnArray(getArray){
      return getArray[1]
   }
   console.log(returnArray(newArray));
   console.log(returnArray([200,400,300]));
   