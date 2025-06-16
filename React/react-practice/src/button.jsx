function doSomethinng(event){
    console.log("What the f*ck am i supposed to do you piece of shit!?");
    console.log(event);
}
// C:\Users\kajal\OneDrive\Documents\Web programming\sigma course\js\React\react-practice\public\
function paraDemo(){
    let x = new Audio("Voicy_loud indian music.mp3")
    alert("chala ja yaha se! ");
    // x.play();
}

function saygaali(){
    console.log("b*dk samj nhi aata kya baar baar click kar ra hai g@nd* hi hai matlab tu to bilkul")
}

function fuckyou(){
    console.log("Fuck you ")
}

export default function Button(){
    return(
        <div onKeyDownCapture={fuckyou}>
            <button onClick={doSomethinng} >Hehahahaha</button>
            <p onClick={paraDemo} >This is for fu*king demo purpose only </p>
            <p  onDoubleClick={saygaali} >This is for fu*king demo purpose only </p>
        </div>
    )
}