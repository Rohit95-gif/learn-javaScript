// let myName  = "rohit"

// console.log(myName.truelength);





let myHeroes = ["thor","spiderman"];

const heoPower = {
    thor : "hammer",
    spiderman : "sling",
    getSpidermanPower : function(){
        console.log(`Spiderman Power is${this.spiderman}`);
        
    }

}

Object.prototype.rohit = function(){
    console.log(`rohit is present in all objects`);
    
}

Array.prototype.hayRohit = function (){
    console.log("rohit is present in all arrays:");
    
}
//heoPower.rohit()
myHeroes.rohit()
myHeroes.hayRohit()
//heoPower.hayRohit()


// inheritance

const user ={
    uName : "rohti",
    eMail : "rohir@gmail.com"
}
const teacher =  {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssigment : 'javaScript Assignment',
    fullTme : true
   
}
// teacher.__proto__.user;

//second way for inheritnace prototype

// Object.setPrototypeOf(teachingSupport,teacher);

let otherUserName = "hitesh          "
String.prototype.trueLength = function(){
           console.log(`${this}`);
        //    console.log(`${this.otherUserName}`);
           console.log(`true length is :${this.trim().length}`);   
           
}
otherUserName.trueLength()

"rohitSolanki".trueLength()
"chaiOurCode".trueLength()