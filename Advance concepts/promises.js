let body = document.querySelector("body");

let el = document.createElement("button");

// function saveData(data, success, failure) {
//   let speed = Math.floor(Math.random() * 10) + 1;
//   if (speed > 5) {
//     success();
//   } else {
//     failure();
//   }
// }

//This is real world example of call back hell.

// saveData(
//   "Ok",
//   () => {
//     el.innerText = "Successfully saved";
//     body.prepend(el);
//     saveData("Meow",()=>{
//         console.log("Ok2");
//     },()=>{
//         console.log("Failure 2");
//     })
//   },
//   () => {
//     el.innerText = "Failed";
//     body.prepend(el);
//   }
// );


//To save us from such nasty call back hells we have promises.

//promises: object that represnt tthe eventual completion (or failure ) of an asynchronous operation and its resulting value.

///resolve and reject.

//states : 3 states 