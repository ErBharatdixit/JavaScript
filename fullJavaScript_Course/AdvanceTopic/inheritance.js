class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}


class Teacher extends User{
    constructor(username,email,password){
         super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const info = new Teacher("bhaear","bharat@gnail.co",123)

info.addCourse();