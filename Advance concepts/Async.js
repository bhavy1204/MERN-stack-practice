// Async functions are those function s which returns a promise by deafult

async function greet(){
    // It makes our promise change to rehected state ;
    // throw "error";
    return "Hello ";
}

greet().then((res)=>{
    console.log(res ,"USer 1");
    return greet();
}).then((res)=>{
    console.log(res ,"USer 2");
})
.catch(()=>{
    console.log("Error");
});

let temp = async ()=>{
    return 5;
};

temp().then((res)=>{
    console.log(res)
}).catch(()=>{
    console.log("ERROR ");
});


// AWAIT : pauses the execution of its surrounding async function until the epromise is setteld. Used only in aysnc function 

function greet2(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            let i = Math.floor(Math.random()*10 +1);
            if (i>5){
            console.log("Hello ");
            resolve();
            }else{
                reject("Error");
            }
        }, 2000);
    });
}

async function call(){
    try{
        await greet2();
        await greet2();
        await greet2();
    }catch(err){
        console.log(err);
    }
}

call();