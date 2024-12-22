//you are work with any condition is may true or false in this situation you are use condition either true or false 

const isLoggedIn = true
const isEnterCard = false 

//all condition is true than enter in scope of if all give output

if (isLoggedIn && isEnterCard) {
    console.log("you are Logged In");
    
}
else{
    console.log("you are not logged in");
}//may condition is false than else block is exicuted


//for multiple condition 

const score = 2000

if (score<500) {
    console.log("score less than 500");
    
} else if(score<700){
    console.log("score less than 700");
   
}
else if(score<1200){
    console.log("score less than 1200");
   
}
else if(score<1500){
    console.log("score less than 1500");
   
}
else if(score<1800){
    console.log("score less than 1800");
   
}
else{
    console.log("score is greater than 1900");
    
}
//this type of condition is called nested if else is used for multiple condition