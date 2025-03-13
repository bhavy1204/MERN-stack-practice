const mongoose = require("mongoose");

// hhtps:localhost:port/DBname port is same always
// Connect is a async method and it will wait for the result from DB 
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// Another method of connect method
main().then((res)=>{
    console.log("Ho gaya kaam");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
