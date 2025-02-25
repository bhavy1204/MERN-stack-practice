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

// Creating  queries using connection oject 
try {
  connection.query("SHOW TABLES",
    (err, res) => {
      if (err) {
        console.log(err);
      } 
      console.log(res);
    }
  )
} catch (error) {
  console.log(error);
}

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

console.log(randomData());
