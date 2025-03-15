const mongoose = require("mongoose");

main().then((res)=>{
    console.log("Ho gaya kaam bha i ! ");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Store');
}

const bookSchema = ({
    title:{
        type: String,
        required:true,//Not null
    },
    author:{
        type : String,
    },
    price:{
        type:Number,
    }
});

const Book = mongoose.model("Book",bookSchema);


let book1 = new Book({
    title:"Harry potter aur 4 gaandu",
    author:"Muje nhi pata ",
    price:69, //"69"(will work) but  "absvkb"(Not work).
});

book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})