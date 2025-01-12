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

p.addEventListener("mouseenter",changeColor);

let img = document.querySelector('img');

img.addEventListener("mouseenter",changeSize);

function changeSize(){
    this.style.border="10px solid black";
}
 img.addEventListener("click",function(){
    this.style.borderRadius="20px";
 })
img.addEventListener("dblclick",function(){
    this.style.boxShadow="20px 20px 20px black";
})

