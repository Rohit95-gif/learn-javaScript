const myChain = [10,20,30,40,50,60,70,80,90,100];

const chainMap = myChain.map((num)=>num*2)
                        .map((num)=>num+200)
                        .filter((num)=>num>300)
console.log(chainMap);

//this type of chaining is called method chaining in javaScript

//you can chain as many methods as you want in javaScript
//you can chain filter, map, reduce, sort, etc. in javaScript
//in simaple way you an use all methos in single chain in javaScript
