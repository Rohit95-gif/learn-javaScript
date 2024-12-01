const studName = "rohitsolanki"

const studAge = 19

//always use this type of symtax for join the string and it's better than old sting sntax please follow this you can asdd some one sting and the sting throw $(variablName)
let studInfo = (`student name is ${studName} and student age is ${studAge}`);

//let studInf = (studName + studAge);
/*
    please dont't following this type od syntax is too old and any mordern code this type od sntax is don't follow 

*/

//console.log(studInfo);

//sting methods 

const stingStr = "Subham Sadadiya  "
const word  = 'subham'

console.log(stingStr.length);

//length() is returns the number of length of sting 

console.log(stingStr.toUpperCase());
//toUppercase() used to convert sting to uppercase

console.log(stingStr.toLowerCase());
 //tolowercase() used to convert sting to lowercase 

console.log(stingStr.indexOf("a"));
//indexOf() returns the indexnumber od given charecter

console.log(stingStr.charAt(8));
//charAt() it's returns the charecter of given index
console.log(stingStr.slice(0,8));
//slice returns() the sting it's starting number to ending number but last number is not included


console.log(stingStr.replace(" ", "-"));
// replace() is use to replace a sting and any one of strign

console.log(stingStr.split(" "));
//The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

console.log(stingStr.trim())
//trim() remove exptra white space in string

console.log(stingStr.toString())
//toString()is use to conver array to string 
console.log(stingStr.substring(0,4))
//substring() is use to get the sting from starting index to ending index but last index is not

console.log(stingStr.includes("Subham"));
//includes() is use to check sting is present or not in sting














 