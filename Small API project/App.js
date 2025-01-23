let btn = document.querySelector("#search");
let inp = document.querySelector("#text");


let url = "http://universities.hipolabs.com/search?name=";

btn.addEventListener("click", async ()=>{
    let text = inp.value;
    console.log(text);
    let clgeArr = await getCollege(text);
    show(clgeArr);
});

function show(clgeArr){
    let result = document.querySelector("#result");
    for(c of clgeArr){
        console.log(c.name);
        let li = document.createElement("li");
        li.innerText = c.name;
        result.appendChild(li);
    }
}


async function getCollege(text){
    try{
        let res = await axios.get(url+text);
        // console.log(res.data);
        return res.data;
    }catch(e){
        return e;
    }
}

