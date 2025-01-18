// Async functions are those function s which returns a promise by deafult

async function greet(){
    // throw "error";
    return "Hello ";
}

greet().then((res)=>{
    console.log("USer 1 ");
}).catch(()=>{
    console.log("Error");
})