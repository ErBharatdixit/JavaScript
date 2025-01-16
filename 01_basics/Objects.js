// singleton -> constructer create a object singleton

// constructer method -> Object.create

// object literals

const mySym = Symbol("key1")

const user = {
    name:"bharat",
    "full name": "bharat Dixit",
    [mySym]: "mykey",             // use Symbol in with in the object

    Age: 23,
    mail: "bharat01@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//Access
console.log(user.name);  // 1st
console.log(user["full name"]); // 2nd
console.log(user[mySym]); 

user.mail = "bhaarta@gmail.com"   // change value
console.log(user.mail);

//Object.freeze(user)    // lock the changes

user.mail = "dbfdj@gmail.com"
console.log(user.mail);
console.log(user);


user.greeting = function(){
    console.log("hello users");
}
user.greeting2 = function(){
    console.log(`hello users, ${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting2());

