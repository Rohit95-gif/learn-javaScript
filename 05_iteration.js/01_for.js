// Loops are handy, if you want to run the same code over and over again, each time with a different value.

// Often this is the case when working with arrays:
// for (let index = 0; index <=10; index++) {
//     const element = index;
//     console.log(element);
    
// }


//some etra example of for loop 

for (let index = 1; index <=10; index++) {
 console.log("this is outer loop:");
 

    for (let i = 1; i <=10; i++) {
        
        console.log(i)
     //   console.log(`THE OUTER LOOP${index} THE INNER LOOP IS ${i}`);
        console.log(index+ "*"+i +"="+index*i);
        
        //console.log(i)
        
    }

}
