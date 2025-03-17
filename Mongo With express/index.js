const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Chat = require("./models/chat");

const path = require("path");

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");

main().then(()=>{
    console.log("Le bhai mongo se bhi connect ho gaya ! ");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let chat1 = new Chat({
//     from :"Bhavy",
//     to :"Ashish",
//     msg :"BHADVA SALA !! ",
//     created_at : new Date(),

// });

// chat1.save().then((res)=>{
//     console.log(res);
// });

app.get("/",(req,res)=>{
    res.send("Aa gaya firse BC ! ");
})



app.listen(3000,()=>{
    console.log("Halchal on port 3000");
})