const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Chat = require("./models/chat");

const path = require("path");

// Using method override to use PUT request 
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// To show express where or static files like css and all will be there ! 
app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method"));

main().then(() => {
    console.log("Le bhai mongo se bhi connect ho gaya ! ");
}).catch((err) => {
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

// NEW CHAT ROUTE 
app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
});

// Adding new chat 
app.post("/chats", (req, res) => {
    // We need to parse this thus we will write urlencoded true above 
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date(),
    });
    // console.log(newChat);
    newChat.save().then(res => {
        console.log("New chat Saved ");
    }).catch((err) => {
        console.log("Bhai tere isme bhi error hai chod de coding naai ban ja ! ");
    })
    // res.send("Kaam kar raha hai ! ");
    res.redirect("/chats");
});

app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
    // res.send("Ab tuje chats dekhni hai BKL..");
});

// EDIT ROUTE

app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});

// Main update route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg : newMsg } = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
    console.log(updatedChat);
    res.redirect("/chats");
});


// DELETE route
app.delete("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

// HOME/MAIN ROUTE
app.get("/", (req, res) => {
    res.send("Aa gaya firse BC ! ");
})



app.listen(3000, () => {
    console.log("Halchal on port 3000");
})