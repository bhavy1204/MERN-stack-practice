let p = document.querySelector("p");

// p.onclick = function () {
//   console.log("Color Changed");
//   p.style.color = "red";
// }

// // p.onclick= changeColor;

let para = document.querySelectorAll("#description");

// // para.onclick = changeColor;
// for(pi of para){
//     pi.onclick = changeColor;
// }

function changeColor() {
  console.log("USing 'this'");
  this.style.color = "purple";
}
//---------------------------------------------------------------------------------

//element.addEventListner(event,callback);

p.addEventListener("mouseenter", changeColor);
// tabindex makes non-interactive elements like <p> focusable, which allows them to listen to keyboard events.
// focus() ensures that the element is ready to receive those events.
p.setAttribute("tabindex", "0");
p.focus();
let img = document.querySelector("img");

img.addEventListener("mouseenter", changeSize);

function changeSize() {
  this.style.border = "10px solid black";
}
img.addEventListener("click", function (e) {
  console.log(e);
  this.style.borderRadius = "20px";
});
//Pointer :- Jo cursor web page pe hilta hai, PointerEvent :- aur click hona us pointer ka event hai. Ye hume hummare triggerd event ke baare me baut kuch information deti hai. It is very useful in keyboard event.

img.addEventListener("dblclick", function (event) {
  console.log(event);
  this.style.boxShadow = "20px 20px 20px black";
});

//---------------------------------------------------------------------------------

let body = document.querySelector("body");

let inp = document.createElement("button");
body.prepend(inp);

inp.setAttribute("tabindex", "0");
inp.focus();

let box = document.createElement('input');


function temp1() {
  body.prepend(box);
  this.innerText = "MEOW";
  this.classList.add("temp");
}

inp.addEventListener("keyup", function () {
  inp.innerText = "Harrasment";
});

inp.addEventListener("keydown", temp1);

function temp2(){
  this.classList.add('');
}

box.addEventListener("keydown", temp2);