// API : 

// prerequistie

// Api is basically a url.
// api can be free or paid. In paid we have to add a KEY in the url to access it.
// For eg :- https://catfact.ninja/fact They give data in JSON format.

// JSON : javacrpit object notation ,it is a format before it was XML. It has key vaue pair like objects. www.json.org

// Json data comes in a form of string . nnot like an object but whole as a string. now to accesss it we use:-
// "JSON.Parse"

// We have 2 tools for testing api :-
// a) Hoppscoth
// b) Poatman

//  AJAX : asynchronous javascript and XML.

// http verbs => get,post,delete;

// Status code => 

    // Adding information in an URL => Key-Value pair

// URL?Key=Value1&Key2=Value2;

// fetch(url);

let url = "https://catfact.ninja/fact";

// fetch(url).
// then((res) => {
//     console.log(res);

//     return res.json()
//     // .then((data)=>{
//     //     console.log(data);
//     // })
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log(data2.fact);
// })
// .catch((err)=>{
//     console.log(err)
// });


async function getKnowledge(){
    try {
        // fetching api
        let res = await fetch(url);
        // Parsing url/api
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch (error) {
        console.log(error);
    }
}

getKnowledge();



















