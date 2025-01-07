class user{
    constructor(userName,email,password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}rohit565656`
    }
    cahngeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}
const chai = new user('rohit','rohit@gmail.co',"565656")

console.log(chai.encryptPassword());
console.log(chai.cahngeUserName());


//bihind the scene

function user(userName,email,password){
    this.userName = userName;
    this.email = email;
    this.password = password;

}
user.prototype.encryptPassword = function(){
     return `${this.password}tea565656`
}

user.prototype.cahngeUserName = function(){
      return `${this.userName.toUpperCase()}`
}

const tea = new user('tea','tea@gmail.com','tea565656');
console.log(tea.encryptPassword());
console.log(tea.cahngeUserName());

