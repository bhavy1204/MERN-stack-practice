//They all used concept of callBack ko input lete hai
let arr = [1, 2, 44,3,4,6,7];
//1. For Each

//Isme jo metod arg me hoga vo har ek array element ke liye run hoga :)

//We genrally use "for of loop"

// let print = function (a) {
//   console.log(a);
// };

// arr.forEach(print);

// console.log("Second method----");
// arr.forEach(function (b) {
//   console.log(b);
// });
// console.log("Third method----");
// arr.forEach((c) => {
//   console.log(c);
// });
// console.log("Object array ----");
let brr = [
  {
    name: "Ahsihs",
    marks: 87,
  },
  {
    name: "Bhavy",
    marks: 598,
  },
  {
    name: "chintu",
    marks: 41,
  }
];

// brr.forEach((s)=>{
//     console.log(s.marks);
// })

//2. MAP function 

let num=[1,2,4,5,5,6]


//Creates an another array and MAPs the elemnt into that in some other way not exactly way but har ek element ko ekk indivial tarike se chane karke us array me map kar dena.

let doguna=num.map((a)=>{
    // return a*2;
})

let gaandpe=brr.map((a)=>{
    return a.marks/10;
});


// 3.Filter

let even = arr.filter((a)=>{
    return a%2!=0;
})

//4. Every

//it will either give true or false, Its like a Logical AND.
arr.every((a)=>{
    return a%2==0;
})
//5. Some
//It will also give true or false checking all the array 
// like a logical OR

//6.Reduce

//Reg=fer to notes its long but very easy.
arr.reduce((Acc,a)=>{
    return Acc*a;
})
//Reduces array to sinle value 

//Lets make a max value finder in the array using the Reduce method

let max= arr.reduce((acc,el)=>{
    if(acc<el){
        return el;
    }else{
        return acc;
    };
});
console.log(max);

//Spread
