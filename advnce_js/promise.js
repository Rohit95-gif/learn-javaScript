let promiseOne = new promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hello world first by rohit:")
        resolve();
    },20000)
        
    })
    promise.then(function(){
        console.log("promise consumed");
        
    })
    promiseOne.then(function(){
        console.log("promise consumed by rohit");
    })

new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("hello world by promise");
        resolve();
        
    },1000);
}).then(function(){
    console.log("promise consumed");
    
})


const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hello world by promise two");
        resolve({username:"rohit",password:"1234"});
    },2000)
})

promiseTwo.then(function(callPromiseThree){
console.log(callPromiseThree);

})


const promiseTree = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = false;
        if(!error){
            resolve({userName : "prince",password:"66464"})
        }
        else{
            reject("error in promise three")
        }

    },1000)
})

promiseTree
.then((user)=>{
    console.log(user);
    return user.userName
    
})
.then((username)=>{
    console.log(username);
    
})
.catch((error)=>{
    console.log(error);
}).finally((finallyIsDefoult)=>{
console.log("PROMISE IS EITHER RESOLVED OR REJECTED");
})

promiseTree 
.then((passwordOfUser)=>{
    console.log(passwordOfUser);
    return passwordOfUser.password;
    
})
.then((passs)=>{
    console.log(passs);
    
})
.catch((err)=>{
    console.log(err);
    
})
.finally((defoult)=>{
    console.log("THis is default block :");
    
})

const promiseFives = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = false;
        if(!error){
            resolve({userName : "myLove",password:"66464"})
        }
        else{
            reject("error in promise three")
        }

    },1000)
})

async function fourAsync(){
    try {
        const response =  await promiseFive;
        console.log(response);
    } catch (error) {
        console.log("error");
        
    }
}
fourAsync();



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = false;
        if(!error){
            resolve({userName : "myLove",password:"66464"})
        }
        else{
            reject("error in promise three")
        }

    },1000)
})
fetch('https://api.github.com/users/hiteshchoudhary').then
((respo)=>{
return respo.json();
}).then((data)=>{
   console.log(data);
   // console.log(data.followers);
    
}).catch((error)=>{
    console.log(error);
    
})