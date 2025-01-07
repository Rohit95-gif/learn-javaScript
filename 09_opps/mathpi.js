const discripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(discripter);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
    that's the resone why we can't not chage the vlaue of math.pi

*/

// console.log(Math.PI);

// Math.PI = 5;
// console.log(Math.PI)
//we can't overwrite the value of PI

const coffe = {
    name: 'late',
    price :350,
    isAvailable : true
    
}
console.log(Object.getOwnPropertyDescriptor(coffe,"name"));

Object.defineProperty(coffe,'name',{
    writable : false,
    enumerable : false

})
console.log(Object.getOwnPropertyDescriptor(coffe,'name'));

/*
output of this properties

  value: 'late',
  writable: false,
  enumerable: false,
  configurable: true
*/




