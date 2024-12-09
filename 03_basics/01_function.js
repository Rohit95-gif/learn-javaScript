//what is junction in javaScript
/*
JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).
*/

function myFunction (){
    //console.log("Hello World");
}
myFunction()
//this is a simple syntax how to declare function in javaScript

function addTwoNumber (number1,number2){
    return number1+number2
    //you are any code before the return it is not exicute  
}
//console.log(addTwoNumber(5,70));

//you can store  two value   in  third variable in javaScript
function maltiplication(n1,n2){
    const n3 = n1*n2
    return n3 
}
//console.log(maltiplication(5,74));
//that is the example of the how to store two number value in third variable 



//how to declare objects in functions and how oto access that

const myObject = {
    name:"rohit",
    city:"wadhwan",
    rollno:32,
    collageName:"K.B.SHAH SCIENCE COLLAGE"
};


function  objectFunction(anyobject){
    return anyobject;
}

 //using . operator u can easly access the value of the obj
console.log(myObject.collageName);



// how to declare array in object and how to access that

const myArray = [200,500,800,900,600];

function arrrayFunction(anyArray){
    return anyArray
}
//how wto access  the array using [] than given index of the value you cna easlly access the array value
console.log(myArray[0]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);

