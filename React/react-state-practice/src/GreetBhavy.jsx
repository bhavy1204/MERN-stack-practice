import { useState } from "react"

export default function Greetbhavy(){
    let [isMsg,changeMsg] = useState(false);

    let toggleText=()=>{
        changeMsg(!isMsg);
    }

    return(
        <>
            <button onClick={toggleText}>Greet Bhavy</button>
            <p>{isMsg?"Hello bhavy":"Gaand mara bhavy"}</p>
        </>
    )
}