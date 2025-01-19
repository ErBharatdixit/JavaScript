const heroes = ["msd","shikhar","ravi"]

const heroes2 = ["superman",'flash',"batman"]
heroes.push(heroes2)

// console.log(heroes);
// console.log(heroes[3][1]);

//   const AllHeroes = heroes.concat(heroes2);
// console.log(AllHeroes);

const allnewHeroes = [...heroes, ...heroes2]
console.log(allnewHeroes)
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anotherArray = anotherArray.flat(Infinity);
console.log(real_anotherArray);
console.log(Array.isArray("bharat"));
console.log(Array.from("bharat"));
console.log(Array.from({name:"bharat"})); // interesting

let score1 = 300
let score2 = 400
let score3 = 500
console.log(Array.of(score1,score2,score3));

