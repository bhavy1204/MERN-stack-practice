import { useState } from "react"
import "./Lottery.css"
import { genTicket,sum } from "./helper";

export default function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWining = sum(ticket) === 15;

    let createTicket= ()=>{
        setTicket(genTicket(3));
    }
    return (
        <>
            <h1> Le bhai laga satta </h1>
            <h1>{isWining && "Badhai ho tu jit gaya ! "}</h1>
            <div className="number">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={createTicket} >Chuu mantar</button>
        </>
    )
}