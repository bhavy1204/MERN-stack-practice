const mongoose = require("mongoose");
const {Schema} = mongoose;
main().then(()=>{
    console.log("mongoDB connect ho gaya bhai ! ");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    
});
