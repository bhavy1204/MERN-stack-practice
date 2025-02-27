// Genertaing  fake data and requiring faker
const { faker } = require('@faker-js/faker');

// Getting Mysql connection object 
const mysql = require('mysql2');

// Craeting connection 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mernTest',
  password: '9928875294'
});

// Writing query in a variable
// let q = "SHOW TABLES"
let q = "INSERT INTO user(userId,username,email,password) VALUES ?";
let data = [["1123", "Bhaavy1204", "Bhdavy@Email", "KyuBatau"],
["1223", "Ashish1204", "Ahsish@Email", "HeHehehehehe"]
];

// Creating  queries using connection oject 
try {
  // Just query than we can write simple q but if we are adding values via template(?) than we have to paas both q and data.
  connection.query(q, [data],
    (err, res) => {
      if (err) {
        console.log(err);
      }
      // The result is array of objects
      console.log(res);
      // console.log(res.length);
      // console.log(res[0]);
      // console.log(res[1]);
    }
  )
} catch (error) {
  console.log(error);
}

// To end the connection otherwise the execution will not stop
connection.end();

// Will create and connect MYSQL to terminal next time


let randomData = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}


// To print the generated data using generate data function
// console.log(randomData());
