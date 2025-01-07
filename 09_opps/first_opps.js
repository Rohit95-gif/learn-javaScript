const myObject = {
userName : "maghu",
userPassword : "maghu123",
userEmail : "mahu@gmail.com",
userPayFUnction : function(){
   // console.log("pay function called");
  console.log(`Usernmae: ${this.userName}`);
  

}
}
//console.log(myObject.userName);
//console.log(this);
//when you print this word in any anvairment you have return empty{} object but you have print this in inspact to consol than you have window object 

function user (userName , userEmail,userPassword){
  this.userName = userName;
  this.userEmail = userEmail;
  this.userPassword = userPassword;
  return this;
}

//first write this () create an empty object  call instance {}
//second  constructore function is call by new keyword
//therd  all infomation store in object 
// four   givne to you 

 const  userOne = new  user ("rohit","rohir@gmail.com","rohir5656");
 const  userTwo = new  user ("maghu","maghu@gmail.com","maghu12");

console.log(userOne);
console.log(userTwo);

