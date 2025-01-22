// for 

for (let index = 1; index <= 10; index++) {
    console.log(index);
    ;
    
}

 // break and continue

 for (let index = 0; index <=20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break
        
    }
    console.log(`value of i is ${index}`);
    
    
 }
 for (let index = 0; index <=20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue
        
    }
    console.log(`value of i is ${index}`);
    
    
 }

 // while

 let index = 0
 while (index <= 10) {
    console.log(` value of index is ${index}`);
    index++
    
    
 }

 // do while 

 let score =1
 do {
    console.log(`Score is ${score}`);
    score++
    
    
 } while (score <= 10);


 // for of loop

 const arr = [1,2,3,4,5,6,67,8]

 for (const val of arr) {
    console.log(val);
    
    
 }

 const greetings = "hello bharat"

 for (const char of greetings) {
    //console.log(char);
    
    
 }
 // maps

 const map = new Map()

 map.set('IN',"INDIA")
 map.set('USA',"United States of America")
 //console.log(map);

 for (const [key,value] of map) {
    //console.log(key, ':-', value );
    
    
 }
// for of loop does not work in the object
 const user ={
    user:"bharat",
    mob: 7087989890,
    email: "bhhasj@gmail.com"
 }
 for (const key in user) {
    //console.log(`${key} --> ${user[key]}`);
    
    
 }

 // for each loop

 const lan = ["java","python","c","c++"]
 lan.forEach(  function (item){
    //console.log(item);
    
 })
//  user.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
    
//  })


const myarr = [
    {
        user:"bharat",
        mob:63257268
    },
    {
        user:"bharat",
        mob:63257268
    },
    {
        user:"bharat",
        mob:63257268
    },
    {
        user:"bharat",
        mob:63257268
    }
]
myarr.forEach((item) =>{
    //console.log(item.user);
    
})

const lang = ["java","python","c","c++"]

const values = lang.forEach((item) =>{
   // console.log(item);
    return item
    
})
//console.log(values);


const nums = [1,2,3,4,5,6,7,8,9]

  const newNums =nums.filter((num)=> num>4

)
//console.log(newNums);
// const newNums2 =nums.filter((num)=> {
//    return num>4

// })
// const newNums2 = []
// nums.forEach((num) =>{
//     if(num>4){
//         newNums2.push(num)
//     }
// })
// console.log(newNums2);
const books = [  
    {  
        title: "To Kill a Mockingbird",  
        bookType: "Hardcover",  
        genre: "Fiction",  
        releaseDate: "1960-07-11",  
        edition: "50th Anniversary"  
    },  
    {  
        title: "1984",  
        bookType: "Paperback",  
        genre: "Dystopian",  
        releaseDate: "1949-06-08",  
        edition: "Classics Edition"  
    },  
    {  
        title: "The Great Gatsby",  
        bookType: "eBook",  
        genre: "Fiction",  
        releaseDate: "1925-04-10",  
        edition: "Illustrated Edition"  
    },  
    {  
        title: "Pride and Prejudice",  
        bookType: "Hardcover",  
        genre: "Romance",  
        releaseDate: "1813-01-28",  
        edition: "Collector's Edition"  
    },  
    {  
        title: "The Catcher in the Rye",  
        bookType: "Paperback",  
        genre: "Fiction",  
        releaseDate: "1951-07-16",  
        edition: "50th Anniversary Edition"  
    },  
    {  
        title: "Brave New World",  
        bookType: "eBook",  
        genre: "Romance",  
        releaseDate: "1932-08-01",  
        edition: "Deluxe Edition"  
    }  
];  

const userBooks = books.filter( (bk) => bk.genre === 'Romance' )




console.log(userBooks);

const myNumbers = [1,2,3,4,5,6,7,8,9,10]


//  const newNumss =myNumbers.map((num)=> num+10)
 


 // chaining
//  const newNumss =myNumbers.map((num)=> num*10).map((num1)=> num1+1).filter((num1) => num1>=41)
const newNumss = myNumbers.reduce(function (acc,currval) {
  return acc + currval
}, 0)
 console.log(newNumss);
 





 