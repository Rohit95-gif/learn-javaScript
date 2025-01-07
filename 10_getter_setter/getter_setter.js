class user {
    constructor(email,password){
            this.email = email;
            this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(vlaue){
        this._email = vlaue
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(vlaue){
        this._password =vlaue.toUpperCase()
    }
}

const rohit = new user('rohit@gmail.com','rohit123');

console.log(rohit.email);
console.log(rohit.password);

