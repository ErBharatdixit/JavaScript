const user ={
    username:"bharat",
    loginCount: 8,
    signedIn: true
}   

console.log(user.username);


function  username(userName,Logincount,isloggedin){
    this.userName = userName;
    this.Logincount = Logincount;
    this.isloggedin = isloggedin;
}

const userOne = new username('bharat',12,true)
console.log(userOne);
const userTwo = new username('Priyam',22,true)
console.log(userTwo);
