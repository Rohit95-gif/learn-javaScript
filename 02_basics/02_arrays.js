const desiHero = ["saktimn","nagraja","kunfu-panda"]

const marvalhero = ["hulk", "spiderman"," thor"]

// how to join two or more array 

desiHero.push(marvalhero)
console.log(desiHero)

//hoe to access of the array

console.log(desiHero[3][1]);

//this is worst sysntx for join to or more array in single arrays
//dont following this 

//second way to join the array is concet use
const joinedArray = desiHero.concat(marvalhero)
console.log(joinedArray)
//it is better than the push () but third is the best way to join the array 

//third way to join the array is spread operator use

const realHeros = [...desiHero, ...marvalhero]
console.log(realHeros);

//this is the best way to join the to or more array in single array
//In morden code all devloper use spread oprator in this code to join the array 

const realNumber  = [1,2,3,[4,5,6],7,8,8,[9,4,5,3]]

const real_anothr_number = realNumber.flat(Infinity)
//in any situasion you have array of aray and you can join the array than you can use flat 
//console.log(real_anothr_number);

 console.log(Array.isArray("rohit"));
 console.log(Array.from("rohit"));
console.log(Array.from({name:"rohit"}));//interesting its given empty array[]

let score1 = 200
let score2 = 300
let score3 = 400

let score = (Array.of(score1,score2,score3))//Array.of is return the array 
console.log(score);



