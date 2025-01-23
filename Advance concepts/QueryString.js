let url = "http://universities.hipolabs.com/search?name=";

let country = "India";

async function CollegeName() {
    try{
        let res = await axios.get(url+country);
        console.log(res);
    }catch(e){
        console.log(e);
    }
}

CollegeName();