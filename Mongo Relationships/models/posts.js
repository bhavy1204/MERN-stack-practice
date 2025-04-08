const mongoose = require("mongoose");
const { Schema } = mongoose;
main().then(() => {
    console.log("mongoDB connect ho gaya bhai ! ");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    email: String,

});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    // let usr1 = new User({
    //     username: "Meow Chand",
    //     email: "Meow@bhow.com",
    // });

    let usr1 = await User.findOne({username:"Meow Chand"});

    // let post1 = new Post({
    //     content: "Me kyu bbatau ye bhi ",
    //     likes: 9,
    // });

    let post2 = new Post({
        content: "Ek baar bola samj nhi aati kya",
        likes: 69,
    });

    // post1.user = usr1;
    post2.user = usr1;

    // await usr1.save();
    // await post1.save();
    await post2.save();
}

const getData = async()=>{
    let res = await Post.findOne({}).populate("user");
    console.log(res);
}

// addData();
getData();
















