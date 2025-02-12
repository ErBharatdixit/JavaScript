// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password

//     }

//     encryptPassword(){
//         return `${ this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const details = new User("bharat","bharat010@gmail.com","123")
// console.log(details.encryptPassword())
// console.log(details.changeUsername())

// behind the scene

function User2(username,email,password){
    this.username = username;
        this.email = email;
        this.password = password

}

User2.prototype.encryptPassword = function(){
    return `${ this.password}abc`
}

const details2 = new User2("bharat", "bhaar@gmail.com","123");
console.log(details2.encryptPassword());