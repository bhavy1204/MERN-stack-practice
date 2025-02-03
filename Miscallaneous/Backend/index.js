const express = require("express");
const app = express();
const port = 3000;

// It is used to parse the incomig data so that express can understand it 
app.use(express.urlencoded({extended : true}));
app.use(express.json());


// Not safe , limited
app.get("/register",(req,res)=>{
    let {name,pass}= req.query;
    res.send("HII from get"+`... And hello ${name}`);
    console.log(name,pass);
});

// Safer option
app.post("/register",(req,res)=>{
    console.log(req.body);
    res.send("HII from post");
});

app.listen(port,()=>{
    console.log(`Halchal on port ${port}`);
})