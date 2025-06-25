// USE EFECT 
// jab bhi componenet ke re rendering pe kuch kaam karana ho tab useEffect use karte hai. 
import { useEffect, useState } from "react"

export default function Counter2() {
    let [currCountx, setCountx] = useState(0);
    let [currCounty, setCounty] = useState(0);

    let increaseCountx = () => {
        setCountx(prev => prev + 1);
    }
    let increaseCounty = () => {
        setCounty(prev => prev + 1);
    }

    useEffect(function gaaliDe() {
        // alert("Lund lele")
        console.log("hehahahhahahaha");
    }, [currCountx]); //If the array is empty than it will only change once when component renders for first time. 
    return (
        <div>
            <p>{currCountx}</p>
            <button onClick={increaseCountx}>+1 :) </button>
            <p>{currCounty}</p>
            <button onClick={increaseCounty}>+1 :) </button>
        </div>
    )
}