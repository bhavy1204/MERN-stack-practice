const express = require("express");
const { userInfo } = require("os");
const app = express();

const port = 3000;

// For the package Mthod-overrride------------------------------------------
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
// ------------------------------------------------------------


// For the package UUID---------------------
    // Using version 4(v4) and naming it uuidv4
    const {v4:uuidv4}= require("uuid");
    // The following is a function for creating IDs..
    // uuidv4();

// ---------------------------------


// To make the data coming from front end understanable to express...
app.use(express.urlencoded({ extended: true }));

// To require path to the Public and views folders...
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


app.listen(port, () => {
    console.log("halchal on port 3000");
});

app.get("/", (req, res) => {
    res.send("Meow Meeow");
})

// GET /posts --------------------------------------------------------------

let posts = [
    {
        id: uuidv4(),
        username: "Meow1",
        content: "Kali billi safed hai"
    },
    {
        id: uuidv4(),
        username: "Meow2",
        content: "Safed billi bhuri hai"
    },
    {
        id: uuidv4(),
        username: "Meow3",
        content: "bhuri billi nili hai"
    }
];

app.get("/posts", (req, res) => {
    // res.send("POST DEKHTA HAI MADAR....");
    res.render("index.ejs", { posts });
})

// NEW POSTS -------------------------------------------------------------------------

app.get("/posts/new", (req, res) => {
    res.render("NewPost.ejs");
})

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    // Creating new id 
    let id = uuidv4();
    posts.push({ id, username, content });
    // res.send("Post ho rahi hai");
    res.redirect("/posts");
});

// Post Id----------------------------------------------------------------------------------

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id );

    console.log(post);
    res.render("SinglePost.ejs",{post});
});

// Update route--------------------------------------------

app.patch("/posts/:id",(req,res)=>{
    let {id}= req.params;
    let NewContent = req.body.content;
    // console.log(NewContent);
    let post = posts.find((p)=>id===p.id);
    post.content = NewContent;
    console.log("Kaam to kar raha hai ");
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}= req.params;
    let post = posts.find((p)=>id===p.id);
    res.render("Edit.ejs",{post});
});

// DELETE----------------------------------------------------------

app.delete("/posts/:id",(req,res)=>{
    let {id}= req.params;
    posts = posts.filter((p)=>id!==p.id);
    // res.send("Bhai delet kardi post ab khush..? :(");
    res.redirect("/posts");  
})
