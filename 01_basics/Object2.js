// object singleton using contructer

const user = new Object()
user.id = "123"
user.name = "bharat"
console.log(user);

const regularUser = {
    email: "fhhd@gmail.com",
    fullname:{
        username:{
            fistName: "bharat",
            lastname: "Dixit"
        }
    }
}

console.log(regularUser.fullname.username.fistName);
console.log(regularUser.fullname.username);

// combine the object
const obj1 = {
    1:"a",
    2:"b"
}

const obj2 ={
    3:"c",
    4:"d"
}

const obj3 = Object.assign()
lo
