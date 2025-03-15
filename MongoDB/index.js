const mongoose = require("mongoose");

// hhtps:localhost:port/DBname ,port 27017 is always same for all
// Connect is a async method and it will wait for the result from DB 
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// Another method of connect method
main().then((res) => {
  console.log("Ho gaya kaam");
})
  .catch((err) =>
    console.log(err)
  );

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Sql me jese schema tables ke liye hota tha mongo me vesa collections ke liye hota hai.. Vese to apan kese bhi collections me data enter kara sakte hai par ek baar schema set hone ke baad puri collection vo same format use karrna padta hai tables ki tarah
const userSchema = new mongoose.Schema({
  name : String,
  email : String,
  age : Number,
});

// Model is a class which we use to construct document
// ----Model----------------Collection----Schema----------
const User =  mongoose.model("User", userSchema);
// Mongo db is naam ko "USERS" kar dega basically last me S laga deta hai aur capital ka small isliye is naam ko si=och ke dena hai
// const Employee = mongoose.model("Employee",userSchema);

// Now model is a class and class ki object create hhoti hai to same vese hi hoga 

const user1 = new User({
  name:"Bhavy",
  email:"Bhavy@mymail.com",
  age:21
});
// Now if we just enter this data than it will be Created in memory buut not show/saved in db isko verify karne ke liye node shwll me jaake load aur fir user1 liko aur dekho ki ek id create hui hogi joki mongoose ne kari hogi.

// isko jitni baar run krenge utni baar run hoga
// user1.save();

const user2 = new User({
  name:"Ashish",
  email:"Ashishkiemail@email.com",
  age:20,
});

// Save method return a promise so we can also use then and catch on it 
// user2.save().then((res)=>{
//   console.log("Kya baat hai bhai ab to mongoDB me bhi data save karne aa gaua tuje !! "+ res);
// }).catch((err)=>{
//   console.log(err);
// })

// INSERT MANY DATA AT ONCE 

User.insertMany([
  {name:"Raju",email:"Kaju",age:29},
  {name:"Kaju",email:"Raju",age:76},
  {name:"Billi",email:"Kutta",age:89},
]).then((res)=>{
    console.log("Kya baat hai bhai ab to mongoDB me bhaut sara data save karne aa gaua tuje !! "+ res);
}).catch((err)=>{
  console.log(err);
});