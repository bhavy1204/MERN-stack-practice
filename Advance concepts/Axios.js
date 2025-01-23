// Axios is a library used to create HTTP requests.

// Ny using axios we dont hav e to parse the recived data... It is bydeafult in a readbale format.

let url = "https://catfact.ninja/fact";

// Fact generating function
async function getKnowledge() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err) {
        return err;
    }
}


let btn = document.querySelector("#result");
let p = document.querySelector("#para");

// Fact event listner
btn.addEventListener("click", async () => {
    let fact = await getKnowledge();
    console.log(fact);
    p.textContent = fact;
})

let url2 = "https://dog.ceo/api/breeds/image/random";

let btn2 = document.querySelector("#result2");

// Image event listner
btn2.addEventListener("click",async  () => {
    let src = await GetImage();
    console.log(src);
    let img = document.querySelector("#set");
    img.setAttribute("src",src);
});

// Image function
async function GetImage() {
    try {
        let img = await axios.get(url2);
        return img.data.message;
    } catch (e) {
        return e;
    }
}