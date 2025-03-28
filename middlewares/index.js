const express = require("express");
const app = express();


// Middleware function it will be there for all routes bcz we didn't specfied any path in it , Middleware do hi kaam kar sakta hai ya to response send karne ka ya to fir dusre midlleware ko call karne ka but apan ne kuch nhi lika esa to kuch bhi nhi hoga aur browser pe bas load hi dikhata hrahega kuch hoga nhi :( 
// app.use(()=>{
//     console.log("Bhai dekh kya raha hai tune likha hai to dikhunga hi na ");
// });

app.use((req,res,next)=>{
    let {query} = req.query;
    console.log("Middleware 1 query : "+query);
    console.log("MiddleWare : Bhai dekh kya raha hai tune likha hai to dikhunga hi na ");
    // res.send("Ho gaya bhai checkhing :) ");
    next();
    console.log("This will also work !!! ");
    return next();
    console.log("This will never work");
});

app.use((req,res,next)=>{
    console.log("Middleware 2 : Ek se man nhi bhara jo do do bana ke dekh raha hhai ");
    next();
})

// Generally middleware ka kaam hota hai ki jo next chiz hone wali hai usko execute karana.
// MiddleWares me 3 params hote hai :- (req,res,next)=>{};
// Middleware can be of many types like built-in (in express like static,urlencoder etc)or  error , third party middlewares or many others

// Agar koi path defiend nhi hai to page pe to koi response nhi ayega but us case me bhi apne midddle ware works karenge 
app.get("/",(req,res)=>{
    res.send("Tu bc fir aa gaya subah suabh ");
})

app.get("/random",(req,res)=>{
    res.send("Tuje tere code pe bharosa nhi hai kya alag alag route pe jaake check kar raha hai chumtiya kahi ka ");
})

app.listen(3000,()=>{
    console.log("Le bhai chal gaya tera server");
})