const express = require("express");

const app = express();

const port = 3000;
// Jab apan is directory ke bahar se bhi server run karete hai tab by default error aati hai aur uskoo resolve karne ke liye apan app.set aur path  ka use karte hai 
const path = require("path");

// For static files like cssa nd js
app.use(express.static("public"));


// Jab apan is directory ke bahar se bhi server run karete hai tab by default error aati hai aur uskoo resolve karne ke liye apan app.set aur path ka use karte hai 
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

// views templates ke kaam aate hai.. 
app.set("view engine","ejs");


// Jab apan is directory ke bahar se bhi server run karete hai tab by default error aati hai aur uskoo resolve karne ke liye apan app.set aur path ka use karte hai 
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.render("Home.ejs");
    console.log("Someone was there on th e page");
})


app.get("/dice",(req,res)=>{
    let val = Math.floor(Math.random()*6  +1);
    res.render("dice.ejs",{val});
})

app.listen(port,()=>{
    console.log(`Activity on the port  ${port}!! `);
});


app.get("/ig/:name",(req,res)=>{
    let n = req.params.name;
    console.log(n);
    const instaDATA= require("./data.json");
    const data = instaDATA[n];
    // console.log(instaDATA);
    if(data){
        res.render("insta.ejs",{data});
    }else{
        res.render("err.ejs");
    }
    
});
