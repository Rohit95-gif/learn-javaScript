const myObj ={
    name: 'JavaScript',
    estd: '1995',
    founder: 'Brendan Eich'
}

for (const key in myObj) {
    
    console.log(`${key} : ${myObj[key]}`);
    
}
//most of the time we use for in loop for itration on object in javaScript
// this is the example of the for in loop in javaScript with map() function
const mapps = new Map();
mapps.set("name","rohit");
mapps.set("city","wadhwan");
mapps.set("rollno",32);
mapps.set("collageName","K.B.SHAH SCIENCE COLLAGE");

for (const [key,value] in mapps) {
    console.log(key ,':-',value);
    
}

//we can not use for in loop for itration on map () in java script 


const myArr = [300,400,450,582,698,258];

for (const key in myArr) {
    console.log(myArr[key]);``
    
}


//for in loop is used for itration on object in javaScript mainlly

