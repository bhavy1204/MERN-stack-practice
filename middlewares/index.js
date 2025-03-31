const express = require("express");
const app = express();
const ExpressError = require("./expressError");

// Middleware function it will be there for all routes bcz we didn't specfied any path in it , Middleware do hi kaam kar sakta hai ya to response send karne ka ya to fir dusre midlleware ko call karne ka but apan ne kuch nhi lika esa to kuch bhi nhi hoga aur browser pe bas load hi dikhata hrahega kuch hoga nhi :( 
// app.use(()=>{
//     console.log("Bhai dekh kya raha hai tune likha hai to dikhunga hi na ");
// });

// app.use((req,res,next)=>{
//     let {query} = req.query;
//     console.log("Middleware 1 query : "+query);
//     console.log("MiddleWare : Bhai dekh kya raha hai tune likha hai to dikhunga hi na ");
//     // res.send("Ho gaya bhai checkhing :) ");
//     next();
//     console.log("This will also work !!! ");
//     return next();
//     console.log("This will never work");
// });

// app.use((req,res,next)=>{
//     console.log("Middleware 2 : Ek se man nhi bhara jo do do bana ke dekh raha hhai ");
//     next();
// });

// Actual useful middleWare like logger function
// Agar isi logger function ko app.get() ke baad likhte to ye sab print nhi hota kyuki us case me req usi app.get se match hoti aur wahi se vapis chali jaati ! 
//  app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log("----Logger-----");
//     console.log(req.method, req.hostname , req.path);
//     console.log(req.time);
//     console.log("--------------");
//     next();
// });

// Middleware app.use me as a callback use hote hai. 
// By deafult app.use ka path "/" hota hai isliye usko like ya nhi koi farak nhi padta 
app.use('/random', (req,res,next)=>{
    console.log(">> Yaha sirf Random route ke liye hi bana hai samja bhosdiwale :) ");
    next();
});

// Middleware as a api
// app.use("/api",(req,res,next)=>{
//     let {token} = req.query;
//     if(token === "giveaccess"){
//         return next();
//     }
//     return res.send("Teri gaand maar denge sahi password daal varna nikal apni gaand leke !! ");
// });
// /ANOTHER SAME WAY OF DOING THIS :-
const verifyToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        return next();
    }
    throw new ExpressError(404,"Teri gaand maar denge sahi password daal varna nikal apni gaand leke !! ");
};

// Consider it as a api above is the middleware to check key and than paas the data
app.get("/api", verifyToken, (req,res)=>{
    res.send("This is data");
});


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


// temp
app.get("/err",(req,res)=>{
    meow=meow;
});
// ERROR HANDLING MIDDLEWARES 
app.use((err,req,res,next)=>{
    console.log("--ERROR--");
    // next();
    // Jo error handling midlwre hote hai unme next, non error handling midlwre ko search karega. To uske liye apne ko next ke argument me err ko paas karna hoga.
    // next(); ❌ This would call the next NON-error middleware (which is incorrect for error handling)
    // Jo error handling middleware hote hai, unme next() by default non-error handling middleware ko search karega.
    // To agar next() me argument pass nhi karte to ye error middleware ko skip karke aage badh jata.
    // next(err); ✅ This ensures that the error is properly passed to the next error-handling middleware.
    // next(err);
    // Temp:- 
    res.send(err);
});

// This middleware will work when req matches none of the previous routes. Bascially it is for 404;
// This middleware should be here only in order to correctly check and see all the routes.
// app.use((req,res,next)=>{
//     res.send("Esa koi page nhi hota bhai chutiya banaya kisi ne tereko ");
//     next();  
// });

app.listen(3000,()=>{
    console.log("Le bhai chal gaya tera server");
})

// For suture refrence :- 
// Think of req like a pizza delivery order:
// req.query → Extra instructions ("Add extra cheese")
// req.body → The actual order (Pizza details)
// req.params → Customer ID (/customer/:id)
// req.headers → Delivery instructions ("Leave at door")
// Hope that clears it up! Let me know if you want more details. 🔥😎

