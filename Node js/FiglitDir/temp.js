const figlet = require("figlet");

figlet("Kal i  billi", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

// npm install if the Node package gets deleted. 


// If we created a new dir first we write npm init 