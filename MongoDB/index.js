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
  name: String,
  email: String,
  age: Number,
});

// Model is a class which we use to construct document
// ----Model----------------Collection----Schema----------
const User = mongoose.model("User", userSchema);
// Mongo db is naam ko "USERS" kar dega basically last me S laga deta hai aur capital ka small isliye is naam ko si=och ke dena hai
// const Employee = mongoose.model("Employee",userSchema);

// Now model is a class and class ki object create hhoti hai to same vese hi hoga 

const user1 = new User({
  name: "Bhavy",
  email: "Bhavy@mymail.com",
  age: 21
});
// Now if we just enter this data than it will be Created in memory buut not show/saved in db isko verify karne ke liye node shwll me jaake load aur fir user1 liko aur dekho ki ek id create hui hogi joki mongoose ne kari hogi.

// isko jitni baar run krenge utni baar run hoga
// user1.save();

const user2 = new User({
  name: "Ashish",
  email: "Ashishkiemail@email.com",
  age: 20,
});

// Save method return a promise so we can also use then and catch on it 
// user2.save().then((res)=>{
//   console.log("Kya baat hai bhai ab to mongoDB me bhi data save karne aa gaua tuje !! "+ res);
// }).catch((err)=>{
//   console.log(err);
// })

// INSERT MANY DATA AT ONCE 

// User.insertMany([
//   {name:"Raju",email:"Kaju",age:29},
//   {name:"Kaju",email:"Raju",age:76},
//   {name:"Billi",email:"Kutta",age:89},
// ]).then((res)=>{
//     console.log("Kya baat hai bhai ab to mongoDB me bhaut sara data save karne aa gaua tuje !! "+ res);
// }).catch((err)=>{
//   console.log(err);
// });

// Now we wil find in moongoose 
// Model.find().then().catch();
// The find method will return a query and it is not a promise but still we can apply .then method to it (Thenable)

// User.find({}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(res);
// });

// User.find({age:{$gt : 30}})
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(res);
// });

// User.find({})
// .then((res)=>{
//   console.log(res[0].name +" , "+ res[0].email);
// }).catch((err)=>{
//   console.log(res);
// });

// User.findById("67d50fb608348614fb263b55")
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(res);
// });


// Now we will use Update method there are 2 types updateOne() and uppdateMany()
// Model.update
// /This also returns a query and the result is thenable

// User.updateOne({ name: "Ashish" }, { age: 50 })
//   .then((res) => {
//     console.log(res);
//   }).catch((err) => {
//     console.log(err);
//   });

  // The above method return the metaData bbut not the actual changed data so if we also want to see the changes done by updation we can use Model.findOneAndUpdate() or Model.findByIdAndUpdaate()
  // Ye method bydeafult purana data print karata hai apan isko options({new:true}) ki help se chhange kar sakte hai (Refere to documentation)

  // User.findOneAndUpdate({ name: "Bhavy" }, { age: 10 },{new:true})
  // .then((res) => {
  //   console.log(res);
  // }).catch((err) => {
  //   console.log(err);
  // });

  // Delete in mongoose

  // It is very same we can apply everthing to it what we applied on update like query specifiers , consiitions,many deletion at once etc. This also return meta data so we will use findAndDelete method
  // User.deleteOne({name:"Billi"}).then((res)=>{
  //   console.log(res);
  // }).catch((err)=>{
  //   console.log(err);
  // });

  User.findByIdAndDelete("67d50fb608348614fb263b55").then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  });

  // CRUD yahi pe samapt hote haii ! 