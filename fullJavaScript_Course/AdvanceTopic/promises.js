 const promiseOne = new Promise(function(resolve, reject){
   // Do an async task - db calls, cryptography

   setTimeout(function(){
    console.log('Async task is complete');
    
     resolve()
   },1000)

 })

 promiseOne.then(function(){
    console.log("promise consumed");
    
 })
  // amother syntax

 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
        

    },1000)
 }).then(function(){
    console.log("Async 2 resolved");
    
 })

 const promiseThree = new Promise(function(resolve, reject){
    setTimeout( function(){
       resolve({
        username:"bharat",
        Email: 'bharat010703@gmail.com'
       })
    } ,1000)
 })

 promiseThree.then(function(user){
      console.log(user);
      
 })


 const promiseFour = new Promise(function(resolve, reject){
    setTimeout( function(){
        let error = true
        if (!error) {
            resolve({
                username: "bharat",
                password: 123345
            })
            
        }else{
            reject('Error: something went wrong')
        }

    } ,1000)
 })
 promiseFour.then((user)=>{
    console.log(user);
    return user.username 
    
 }).then((username)=>{
    console.log(username);
    

 }).catch(function(error){
    console.log(error);
    
 }).finally(()=>{
    console.log('promise either resolve or rejected')
 })


 const promiseFive = new Promise((resolve,reject)=>{
    setTimeout( function(){
        let error = true
        if (!error) {
            resolve({
                username: "Dixit",
                password: 123345
            })
            
        }else{
            reject('Error: js went wrong')
        }

    } ,1000)

 })
 
 async function consumePromiseFive(){
 try{
    const response =  await promiseFive
    console.log(response)
 } catch(error){
    console.log(error)   
 }
     
 }

 consumePromiseFive();