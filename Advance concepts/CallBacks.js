let h = document.querySelector("h1");

// setTimeout(() => {
//   h.style.color="red";
// }, 1000);
// setTimeout(()=>{
//     h.style.color="purple"
// },2000)
// setTimeout(()=>{
//     h.style.color="orange"
// },3000)

function jcolor(c, time, next) {
  setTimeout(() => {
    h.style.color = c;
    if (next) {
      next();
    }
  }, time);
}

// jcolor("red",1000);
// jcolor("yellow",2000);
// jcolor("purple",3000);
// jcolor("orange",4000);

//THIS IS CALLED CALL BACK HELL, this type of issue arises when we deal with aynchronus nature of javascript. We also use promises and async andawait to resolve these kind of issues but at some places they can't be avoided and we will see many production level codes with "call back hells"

jcolor("red", 1000, function () {
  jcolor("Yellow", 1000, function () {
    jcolor("Purple", 1000, function () {
      jcolor("green", 1000, function () {
        jcolor("orange", 3000);
      });
    });
  });
});
