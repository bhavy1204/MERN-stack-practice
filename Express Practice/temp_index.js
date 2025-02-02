const express = require('express');

const app=express();

const port = 3000;

// console.dir(app);

app.listen(port,()=>{
    console.log("all Ok ");
});

// app.use((req,res)=>{
//     console.log("We got a request !!");
// });

// By deafult request https based hoti hai but express unko objects me parse kar deta hai to usme apan fir JS use kar sakte hai aur samaj sakte hai.....

// Aur response ko Express JSON format me conveert karke psend karta hai aur usko apan kese bhi send kar sakte hai as a text object, html etc....

// app.use((req,res)=>{
//     console.log(`We got req at port ${port} `);
//     code = "<h1>HELLO </h1><ul><li>Meow</li><li>Sherrrr</li><ul/>"
//     res.send(code);
//     // console.log(req);
// });

// app use se sabhi routes ko ek jesa hi response milta hai but apan usko change kar sakte hai dusre use method ki help se....

// Response hamesha ek hi jata hai.... same path ke liye same response bt alaaag path ke liye alag response...

// But agar mentionded routes ke alava koi route set kiya to fir to error aaegi !!! 

// app.get("/", (req,res)=>{
//     res.send("Hello !! ");
//     console.log("Req recived !");
// });

// app.get("/cat", (req,res)=>{
//     res.send("Billi !! ");
//     console.log("Req recived !");
// });

// app.get("/sher", (req,res)=>{
//     res.send("lion !! ");
//     console.log("Req recived !");
// });

// app.get("/fuck", (req,res)=>{
//     res.send("Gandi baat !! ");
//     console.log("Req recived !");
// });

// app.get("*",(req,res)=>{
//     res.send("For all ");
//     console.log("Req recived !");
// });

// PATH Parameters
// for example of ig there are million of accounts and it would b immposible to write all path for all acccounts therefore we create some variabbles which can be referd to as a path parameters.. They are all treated as a variable....

// QUERY STRING


app.get("/:Username/:id",(req,res)=>{
    let {Username,id}=req.params;
    console.log(req.params);
    res.send(`Hello @${Username}, your is is ${id}`);
});

app.get("/",(req,res)=>{
    console.log("Home page accessed");
    res.send("You are on the home / root page");
})



// We will search as "URL/Search?q=Value";

app.get("/search",(req,res)=>{
    let {q}= req.query;
    if(!q){
        res.send("BHOW BHOW");
    }else{
    res.send(`<h1> You searched for ${q}</h1> `);
    }
})