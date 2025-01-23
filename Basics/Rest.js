//REST :  it is opposite to spread.
//Multiple values and convert it to iterable or object.
//Allowss a funcions to take any nummber of argumeents.

function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("YOU GOT : "+args[i]);
    }
}

sum(1,2,3,4,5);
//Har function ke liye arguments naam ke variable ya collection apne aap bante hai aur store hote hai

function min(a,b,c,d){
    console.log(arguments);
    console.log(arguments.length);
    // It will give error because the push function is of array and the arguments is not array but collection RThat why this will give error.
    // arguments.push(10);
    //Isliye apan yaha pe rest ko use karte hai taaki ye saare arguments jo by deafult store hote hai par ek aarray nhi banate par jab apan inko rest ki help se store karate hai to vo ek array me store hote hai aur unpe apan vo sab kar sakte hai jo ek array pe kar sakte hai. Islie REST is Best !! :)
}
console.log("---BAAD KE---")
function min(a,...arguments){
    console.log(a);
    return arguments.reduce((acc,el)=>{
        return acc+el;
    })
}

console.log(min("Hii",10,20,2,20));

