//objects in javaScript

const jsUser = {
    name:"rohit",
    city:"wadhwan",
    isLoggedIn:true,
    hobbies:["cricket","football","reading"],
    address:"gujarat surendranagar disc wadhwan city",
    cource:"bca"

};
console.log(jsUser["name"]);
console.log(jsUser["city"]);
console.log(jsUser["isLoggedIn"]);
console.log(jsUser["hobbies"]);
console.log(jsUser["address"]);
console.log(jsUser["cource"]);

//how to use symbole in object 

const mySymbol = Symbol("isSymbole")

//how to integret symbole in the object and how to access that



const userOfjs = {
    name:"jigar",
    city:"surendranagar",
    mobilNo:"989822***",
    cource:"bca",
    [mySymbol]:"isSymbole"
};

console.log(userOfjs["name"]);
console.log(userOfjs["city"]);
console.log(userOfjs["mobileNo"]);
console.log(userOfjs["cource"]);
console.log(userOfjs[mySymbol]);

//how to change the value f the object 

console.log(userOfjs.name="subham");
console.log(userOfjs)

//the method is used for freez the object it's mean thay any can't change the value of the object 

Object.freeze(userOfjs)
//any employee change the value it can not change the orignel  actual value in object 

userOfjs.greeting = function(){
    console.log("hello");
}

userOfjs.greetingTwo = function(){
    console.log(`hello javaScript ,${this.name}`);
}

console.log(userOfjs.greeting());
console.log(userOfjs.greetingTwo());
