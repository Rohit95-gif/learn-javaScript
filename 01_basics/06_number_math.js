const score = 100

console.log(score.toFixed())
// tofixed() is used to fix the number of the variable 
console.log(score.toLocaleString());
// toLocaleString() is used to convert the number to string with locale specific formatting.

const balance = 100.001
console.log(balance.toPrecision(2))
//The toPrecision() method of Number values returns a string representing this number to the specified number of significant digits.

const numberOne = 34

console.log(numberOne.valueOf())
//valueof() returns the value of the nuber 

const otherNumber = 65
console.log(otherNumber.toString())
//toString is used to convert number to the sting 

//++++++++++++++++++++++++++++++++  Math in javaScript +++++++++++++++++++++++++++++

console.log(Math);
// math() is used to performe the mathemetical calculation on javaScript like min, max , sqrt , abs and ext.....

console.log(Math.abs(-8));
//abs() also returns th positive value 

console.log(Math.ceil(3.1));
//ceil()returns the next value of the number always 

console.log(Math.floor(4.6))
//floor() returns the first number of the floating point ex (8.4) it returns the 8
 
console.log(Math.round(8.3));
//round() returns the either number is 5.0 its given first number or greter the 5.0 it returns the next number 

console.log(Math.min(4,2,8,6,9,8,7,7));
//min() returns the minimum value of the array

console.log(Math.max(4,2,8,6,9,8,7,7));
//max() returns the maximum value of the array

console.log(Math.random())
//random() returns the random number betwen the 0 ro 1 always

console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20 

console.log(Math.floor(Math.random()*(max - min + 1 )+min))

