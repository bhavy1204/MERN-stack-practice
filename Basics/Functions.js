function Greet(a){
    console.log("Hello "+ a);
}
let a="Ashish";

Greet(a);

function add(a,b){
    return a+b;
    console.log("Will not print");
}

console.log(add(10,20));
//Scopes :-

//1. Function scope(Variables defined inside a function)
//2. Block scope (Variables defined inside a {})
//3. Lexical  scope (in terms of function inside a function)

function factorial(a){
    if(a==1){
        return 1;
    }else{
        return a*factorial(a-1);
    }
}

console.log(factorial(5));

// function first(second,a){
//     // console.log(a);
//     second();
// }
// let b=function() {
//     console.log("Hello ");
// }
// first(b,10);

// console.log("Hello...?");

//HIGH ORDER FUNCTIONS :- Functions which takes functions as a argument or return them.

function BaarBaar(dusraFuncn,count){
    for(let i=0;i<count;i++){
        dusraFuncn();
    }
}
let greet=function (){
    console.log("Hello ");
}

BaarBaar(greet,2);
//----------------


//Methods :- peformed on an object, They are at their core a function only.

const obj={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    }
}

console.log(obj.sub(10,20));

//In javascript the STring and arrays and objects are internally Objects only,

// sub(10,40);
//-----------------

//THIS refers to an object that is executing the current piece of code.

// this.obj

// let n1 = prompt("ENter n1 ");
// let n2 = prompt("ENter n2 ");
console.log(n1);
console.log(n2);

const meow={
    name:"Ashish",

    number1:parseInt(n1),
    number2:parseInt(n2),
    avg:function(){
        return (this.number1+this.number2);
    }
}
console.log(meow.avg());
