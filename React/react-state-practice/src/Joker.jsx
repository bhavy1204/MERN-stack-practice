import { useEffect, useState } from "react";

export default function Joker() {

    // *** Hum useState me initilization ke liye async function ko nhi paas karte usse UUI me change nhi aata vo bas ek promise return kakrek chod dete hai.
    let [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline
        });
    }

    useEffect(() => {
        async function getFirstjoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            setJoke({
                setup: jsonResponse.setup,
                punchline: jsonResponse.punchline
            });
        }
        getFirstjoke();
    },[]);
    return (
        <div>
            <h1>Meow Meow</h1>
            <h4>{joke.setup}</h4>
            <h4>{joke.punchline}</h4>
            <button onClick={getJoke}>Joke de</button>
        </div>
    )
}