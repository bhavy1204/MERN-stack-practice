//TO resolve runtime errors 
// Due to a single invalid user input the whole program terminates and to pevent it from happening we use concept of exception HAndling or Try and Catch

//TRY : Define a block of code to be tested for errors
//CATH : Define a block of code to be executed to be if an error occrs in try block.

// let a= prompt("Enter value ");
let a ;
try {
    if(a==0){
        console.log("Zero got");
    }else if(a=='a'){
        throw 'a';
    }else{
        throw a;
    }
} catch (error) {
    console.log("Inside catch block "+ error);
}




