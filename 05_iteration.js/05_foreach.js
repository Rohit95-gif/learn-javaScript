const myArray = ["rohit","jigar","mona","karan","vijay","vishal","vishnu"];

myArray.forEach( function (values){
    //console.log(values);
})

//second way to declaare foreach loop in javaScript

const arrOfArray = ["sahil","maghu","rohit","jigar","mona","karan","vijay","vishal","vishnu"];
// decare for each loop with arrow function
// arrOfArray.forEach( (val)=>{
// console.log(val);
// })
function printMe (item){
    console.log(item);
    
}
arrOfArray.forEach(printMe);

arrOfArray.forEach( (val,index,arr)=>{
    console.log(val,index,arr);
    
})

// you have array and under the array you have multiple object and you want to print the object value then you can use the foreach loop in javaScript
/*
[{
},{
},{
}
]
*/

let objArray = [
    {
        name:"rohit",
        city:"wadhwan",
        rollno:32,

    },{
        name:"rohan",
        city:"wadhwan",
        rollno:33,
    },{
        name:"mohan",
        city:"wadhwan",
        rollno:34,
    }
]
objArray.forEach((item)=>{
    console.log(item.name);
    console.log(item.city);
    console.log(item.rollno);
    
})
//this is way to use the foreach loop on array of object in javaScript