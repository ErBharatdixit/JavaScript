class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)


        
    }
     static createId(){ // static key word not give a access to every instance
        return `123`
    }
}

const bharat = new User("bharat")

//console.log(bharat.createId())

class Teacher extends User{
    constructor(email,username){
         super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")

iphone.logMe()