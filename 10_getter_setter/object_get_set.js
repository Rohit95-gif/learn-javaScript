const user ={
_email: 'solank@gmail,com',
_password : 'rohit4545',


get email(){
return this._email.toUpperCase()
},
set email(vlaue){
    this._email =vlaue
},

get password(){
    return this._password.toUpperCase()
},
set password(value){
    this._password = value;
}
}

const info = Object.create(user)

console.log(info.email);
console.log(info.password);

