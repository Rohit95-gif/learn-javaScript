//this is call the globle scope you cna define variable in globle sope you are able to access the variable in any place 
//example
const variableAb = "rohit"
//you can able to access the variableAb in any placed in any time 

//this type of scope call the block level score
 if(true){
    let letDeclare = 45
   const contDeclare = 78
    var verDeclare = 56
    //console.log(letDeclare);
    // the block level scope u can call the variable under the block u can not call variable outside of the block 
    // letDeclare is not defined 
    //the node given this type of error
    
 }

 console.log(verDeclare);
 //this resone most of the morden coder is not use var as a variable declaration it's not define is scope
 //that's the resone avoid var to declare variable 


 console.log(variableAb);
//more about the scope of javascript is below//

console.log(addNumber(5));
function addNumber (num){
   return num + 1;
}

//you cna not call function upone the function must you got a arror by node //

const myFuntion = function(numers){
   return numers + 2
}
console.log(myFuntion(5));
//mustlly you can calll function in below the declaration //