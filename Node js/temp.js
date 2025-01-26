// module.exports.b= "This is in other file";
// Basically it is an object 
// module.exports =b;

let greet=(name)=>{
    console.log("Hello ", name);
}

let a = "A";

const PI = 3.14587;

let obj = {
    PI:PI,
    a:a,
    greet:greet,
};

module.exports=obj;