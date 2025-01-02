// let promiseOne = new promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hello world first by rohit:")
//         resolve();
//     },20000)
        
//     })
//     promise.then(function(){
//         console.log("promise consumed");
        
//     })
//     promiseOne.then(function(){
//         console.log("promise consumed by rohit");
//     })

new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("hello world by promise");
        resolve();
        
    },1000);
}).then(function(){
    console.log("promise consumed");
    
})

