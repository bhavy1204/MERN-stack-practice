const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Chat = require("./models/chat");

const path = require("path");


const ExpressError = require("./expressError");
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
    await mongoose.connect('mongodb://127.0.0.1:27017/fakeWhatsapp');
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
    // throw new ExpressError(569, "page to hai par dekhne nhi dunga :) ");
    res.render("new.ejs")
});

// Adding new chat 
app.post("/chats", async (req, res, next) => {
    try {
        // We need to parse this thus we will write urlencoded true above 
        let { from, to, msg } = req.body;
        let newChat = new Chat({
            from: from,
            msg: msg,
            to: to,
            created_at: new Date(),
        });
        console.log(newChat);
        await newChat.save()
        // .then(res => {
        //     console.log("New chat Saved ");
        res.redirect("/chats");
        // }).catch((err) => {
        //     console.log("Bhai tere isme bhi error hai chod de coding vyas ban ja ! ");
        // })
        // res.send("Kaam kar raha hai ! ");
    } catch (err) {
        next(err);//Calling or error handling middleware in end :) 
    }
});


// INDEX ROUTE
app.get("/chats", async (req, res) => {
    try {
        let chats = await Chat.find();
        // console.log(chats);
        res.render("index.ejs", { chats });
        // res.send("Ab tuje chats dekhni hai BKL..");    
    } catch (err) {
        next(err);
    }
});

// WrapAsync is a function which returns a function and takes function as a argument. The function which it returns contains a req,resand next and this function runs the function which is in argument and it it thenable so we can hnadele errors by.catch(err)

// We used it bcz try catch was too bulky 

function asyncWrap(func){
    return function(req,res,next){
        func(req,res,next).catch((err)=>next(err));
    }
};

// In this we wrapped the whole function inside wrapAsync and passed it as a argment
// New show route
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        // ; //This will just simply crash the server bcz it is async. In these by default call to next is not made we have to explicitly call it...
        // Mongo db me findbyid me agar usko chat nhi milti vo bas chat ke andar garbage/undefined ya har kuch daal ke deta hai par error nhi batata. aur ye error ejs template generate karta hai Mongo DB nhi :) 
        return next(new ExpressError(300, "Async error msg( \"Id wrong :) \") "));
    }
    res.render("edit.ejs", { chat });
}));


// EDIT ROUTE
app.get("/chats/:id/edit", async (req, res,next) => {
    try {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", { chat });
    } catch (err) {
        next(err);
    }

});


// Main update route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
    console.log(updatedChat);
    res.redirect("/chats");
});


// DELETE route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

// HOME/MAIN ROUTE
app.get("/", (req, res) => {
    res.send("Aa gaya firse BC ! ");
})


const handelValidationError = (err)=>{
    console.log("Tu firse invalid data enter karane ki koshish kar raha hai..Sharam nhi aati ..? ");
    console.dir(err);
}

app.use((err,req,res,next)=>{
    console.log(err.name); //This will tell specific error of express and mongo
    if(err.name === "Error"){
        console.log("BSDK dhang se kaam kar na :) ");
    }else if(err.name === "ValidationError"){
        err = handelValidationError(err);
    }
    next(err);
});

// Error handlling middleware
app.use((err, req, res, next) => {
    let { status = 404, message = "Tu yaha bhi aa gaya yrr  :( " } = err;
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log("Halchal on port 3000");
})