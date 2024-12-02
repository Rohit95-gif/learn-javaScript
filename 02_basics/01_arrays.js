// arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

myArr.push(6)
// add element in end of the array

myArr.push(7)

myArr.pop()
// remove element from end of the array

 myArr.unshift(9)
// add element in start of the array

 myArr.shift()
// remove element from start of the array

console.log(myArr.includes(9));
// it check the element is present or not in the array 
console.log(myArr.indexOf(3));
//it retuns the index of the elements 

 const newArr = myArr.join()
// join() is jin the array and returns the new string

 console.log(myArr);
 console.log( newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);