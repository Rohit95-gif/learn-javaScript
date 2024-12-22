//falsy value in javaScript

// 0 ,false,-0, bigint n0,"",null,undefined,nan

//fruthly valuey in javaScript

//1,true,"0","false"," ",[],{},function(){}

//how to check arrray is empty or not 

const arrayNo = [];

if (arrayNo.length===0){
    console.log("array is empty");
    
    
}
else{
    console.log("array is not empty");
}

//how to check object is empty or not 

const myObj = {

}
if (Object.keys(myObj).length===0){
    console.log("object is empty");
    
}