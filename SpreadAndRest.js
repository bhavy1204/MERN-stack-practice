//Spread: Expand an iterable into multible values
let arr=[1,2,3,4,5,6,9,7,7,5]
let a="ashish";

console.log("Ashish");
console.log(...a);
console.log(..."Ashish");
console.log(...arr);
console.log(Math.max(...arr));

let NewArr=[...arr];
console.log(...NewArr);

let Name=[...a, ...NewArr,...a];
console.log(...Name);


//Spread with object luiterals

const acc={
    name:"ashis",
    age:20
}
