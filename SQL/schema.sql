SHOW TABLES;


SELECT * FROM test;

-- Creating table


Create TABLE user(
    userId VARCHAR(10) PRIMARY KEY,
    username VARCHAR(30) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

