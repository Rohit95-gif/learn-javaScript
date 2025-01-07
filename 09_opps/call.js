function setUserName (username){
    this.username=username
    console.log("called");
    
}
function createUser(userName,email,password){
    setUserName.call(this,userName)

    this.email = email
    this.password = password

}

const tea = new createUser("tea","tea@gmail.com","123");
console.log(tea);
