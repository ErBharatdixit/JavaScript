const accountId = 123456
let accountEmail = "bharat0103@gmail.com"
var  accountPassword = "1234"
accountCity = "jaipur"

let accountState;

//accountId = 2  not allowed

console.log(accountId)
accountEmail = "hcdj@ef.com"
accountPassword = "121232323"
accountCity = "Benguluru"
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
/*
prefer not to use var 
because of issue in block scope and functional scope

*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])




