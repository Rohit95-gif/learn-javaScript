const  arr =["rohit","rohan","mohan","sohan","gohan"];

for (const val of arr) {
    console.log(val);
    
}

const  greetings = "hrllo rohit";

for (const greet of greetings) {
    console.log(`the value of greeting is ${greet}`);
    
}

// this is the example of the for of loop in javaScript with map() fu
const mapps = new Map();

mapps.set("name","rohit");
mapps.set("city","wadhwan");
mapps.set("rollno",32);
mapps.set("collageName","K.B.SHAH SCIENCE COLLAGE");



for (const [keys,value] of mapps) {
    console.log(keys ,':-',value);
    
}

// we can not applay for fo loop for itration on object in javaScript

