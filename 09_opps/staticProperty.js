class user{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`userName:${this.userName}`);
        
    }
  static  creatId(){
        return `123`;
    }
}

const rohit = new user("rohit");

// console.log(rohit.creatId());

class teacher extends user{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const phone = new teacher("realmeC35","realme@gmail.com");

console.log(phone.logMe());