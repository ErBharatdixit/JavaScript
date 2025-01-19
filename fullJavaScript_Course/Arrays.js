// array

const myArr = [0,1,2,3,4,5]

const myHeros = ["MSD","Shakti","Ram"]

// Array methods
myArr.push(6);
myArr.pop();
myArr.unshift(9);
myArr.shift();
console.log(myArr.indexOf(9)); 
console.log(myArr.includes(9)); 
const newArr = myArr.join() // change array in to String
console.log(myArr);
console.log(newArr);
// slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);
const myn2 = myArr.splice(1, 3); // manipulating the original array
console.log("c", myArr);

console.log(myn2);




