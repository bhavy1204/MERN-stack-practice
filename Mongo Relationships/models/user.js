const mongoose = require("mongoose");
const {Schema} = mongoose;
main().then(()=>{
    console.log("mongoDB connect ho gaya bhai ! ");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

// MongoDb will also generate Id for address as it sees "address" as a valid schema and thus also provide it id for each individual record
const userSchema = new Schema({
    username : String,
    address:[
        {
            _id: false,    // If we dont want id here 
            location : String,
            city:String,
        },
    ],
});

const User = mongoose.model("User", userSchema);

// one to few relationship as one user can have multiple addresses.
const addUsers = async () => {
    let user1 = new User({
        username: "Nilla Billa",
        address:[{
            location:"Kacchi basti",
            city:"Dholakpur"
        }]
    });
    user1.address.push({location:"Choti kacchi basti",city:"Meowpura"});
    let result = await user1.save();
    console.log(result);
}

addUsers();
