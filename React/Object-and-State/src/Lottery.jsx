// Now this desgin or way is very very ineffective and kind of childish as we have hardcoded many things, as well as we lft no to little space for scalability, we just made a fix size of array made fixed conditions and in future what if our condition changes or number of diggits of tickets changes, also we made conditons like sum===15 what is 15 changes to 25 or anything else.? So we need to make it a variable, basically to bring a small chnage in functinnality we have to change many aspects of our code . These are called "DESIGN RELATED" or "STATE DESIGN PATTERNS" things like how to design.? 


// >> Lifting state up :: a common design pttern in react 
// ----------------------------------------------------------------------------------------------------------
// import { useState } from "react"
// import "./Lottery.css"
// import { genTicket,sum } from "./helper";

// export default function Lottery() {
//     let [ticket, setTicket] = useState(["","",""]);
//     let isWining = sum(ticket) === 15;

//     let createTicket= ()=>{
//         setTicket(genTicket(3));
//     }
//     return (
//         <>
//             <h1> Le bhai laga satta </h1>
//             <h1>{isWining && "Badhai ho tu jit gaya ! "}</h1>
//             <div className="number">
//                 <span>{ticket[0]}</span>
//                 <span>{ticket[1]}</span>
//                 <span>{ticket[2]}</span>
//             </div>
//             <button onClick={createTicket} >Chuu mantar</button>
//         </>
//     )
// }
// ----------------------------------------------------------------------------------------------------------
// WE can not pass state or variable to higher in hiaarchy

// Components types:- 
// 1-2 Functional and classs
// Another division is logical(aka smart comp) and presentational components(aka dumb comp)
// Generally we are using presentational only, It is only usedd for UI , we are not doing as such work in them, They do not have any state variable
// logical compo n the other hands have state which have some logic and definately will be doing somme work 


import { useState } from "react"
import "./Lottery.css"
import { genTicket,sum } from "./helper";

export default function Lottery() {
    let [ticket, setTicket] = useState(["","",""]);
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