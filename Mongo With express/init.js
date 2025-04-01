// This file is used for inserting sample data in DB for just to check and help in future refrence in devlpment of project This is runned only for once 
const mongoose = require("mongoose");
const Chat = require("./models/chat");


main().then(()=>{
    console.log("Le bhai mongo se bhi connect ho gaya ! ");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakeWhatsapp');
}

let Bulkchats = [
    {
    from :"Bhavy",
    to :"Ashish",
    msg :"BHADVA SALA !! ",
    created_at : new Date(),
    },
    {
        from :"Ram",
        to :"Shaym",
        msg :"Hehahaha",
        created_at : new Date(),
    },
    {
        from :"sita",
        to :"gita",
        msg :"hari bol !",
        created_at : new Date(),
    },
    {
        from :"Meow",
        to :"Tota",
        msg :"te te te te te te ! ",
        created_at : new Date(),
    },
    {
        from :"Table",
        to :"Kursi",
        msg :"lavdi saali ! ",
        created_at : new Date(),
    },
    {
        from :"kanishk",
        to :"Khushal",
        msg :"Bhai me gay hu ! ",
        created_at : new Date(),
    },

];

// chat1.save().then((res)=>{
//     console.log(res);
// });

Chat.insertMany(Bulkchats);