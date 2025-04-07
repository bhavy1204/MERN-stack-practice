const mongoose = require("mongoose");
const {Schema} = mongoose;
main().then(()=>{
    console.log("mongoDB connect ho gaya bhai ! ");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

// MongoDb will also generate Id for address as it sees "address" as a valid schema and thus also provide it id for each individual record
const orderSchema = new Schema({
    item:String,
    price:Number,
});

const customerSchema = new Schema({
    name:String,
    orders:[
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
});


const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async ()=>{
    let cust1 =  new Customer({
        name :"Bhagad billa",
    });

    let ordr1 = await Order.findOne({item: "pen"});
    let ordr2 = await Order.findOne({item: "laptop"});

    cust1.orders.push(ordr1);
    cust1.orders.push(ordr2);

    let result = await cust1.save();
    console.log(result);
};

// addCustomer();

const findCustomer = async ()=>{
    let res = await Customer.find({}).populate("orders");
    // console.log(res);
    console.log(res[0]);
}

findCustomer();

// const addOrders = async () =>{
//     let result = await Order.insertMany([
//         { item: "pen", price:10,},
//         { item: "laptop", price:190,},
//         { item: "shoes", price:1000,},
//     ]);
//     console.log(result)
// }

// addOrders();