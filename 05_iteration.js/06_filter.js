const arrofArray =[1,2,3,4,5,6,7,8,9,10];

const filterArray = arrofArray.filter((value) => {
   return value>4;
})
//console.log(filterArray);


const filterArray1 = arrofArray.filter((value) => value>7);
//this is the easiest way to write the filter function in javaScript

//this is the example of how to print data using foreach loop in java script 

 const foreacArray = arrofArray.forEach((val)=>{
    arrofArray.push(val);
    if(val>2){
      //  console.log(val);
        
    }
})
//console.log(foreacArray)
//using for each loop we can print the value of array in javaScript

// more example of filter 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004,pages: 200 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 ,pages: 300},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007,pages: 400 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010,pages: 500 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014,pages: 600 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010,pages: 200 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996,pages: 300 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016,pages: 400 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989,pages: 800 },
  ];

  let userBooks =books.filter((bk)=>bk.genre === 'Fiction'&&bk.publish>1900&&bk.pages<500);

  userBooks = books.filter((bk)=>bk.publish>1950&&bk.edition>2000&&bk.pages>500);


  console.log(userBooks);
  