class user {
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`user is ${this.userName}`);

        
    }
}
class teacher extends user{
    constructor(userName,email,password){
        super(userName)
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`new course added by${this.userName}`);
        
    }
}

const chai = new teacher('chai','chai@gmail.com','chai1234');

chai.addCourse()

const teaMasala   = new user("masalCahi");

teaMasala.logMe();

console.log(teaMasala instanceof user);
