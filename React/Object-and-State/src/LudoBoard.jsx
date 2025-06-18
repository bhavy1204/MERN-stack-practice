import { useState } from "react"

export default function LudoBoard() {

    let [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 })
    let [arr, setArray] = useState(["No moves"]);

    let updateBlue = () => {
        // moves.blue += 1
        // console.log(moves.blue);
        // setMoves(moves);
        // To ye uparr wala kaam nhi karega kyuki apan jo hai vo object kki "key" me change kar rahe hai par object to vese ka vese hi hai us object me change nhi aaya. Jese apan Array ki kisi index ki value ko update karte hai to array ki value me change aaya par array jo ki ek address hota hai vo to vese ka vese hi hai. Aur ye change usme iinternally reflct hota hai isliye to isme bhi console pe update value aa rahi hai par component me show nhi ho rahi kyuki re render tabhi hoga jab state (aur is case me state me object hai) change ho. To isko solve karne ke liye apan ek copy send karte hai using "spread" 
        // console.log(moves.blue);
        // setMoves({ ...moves, blue: moves.blue + 1 });

        // In form of callBacks (good approach)
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 }
        })

        // In case of array the story remains same
        // arr.push("Blue chala");
        // setArray(arr);

        // setArray([...arr, "blue chala"]);
        setArray((prevArray) => { 
            return [...prevArray, "blue chala"] 
        });
        console.log(arr);
    }

    let updateYellow = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 }
        })
    }

    let updateGreen = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, green: prevMoves.green + 1 }
        })
    }

    let updatered = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1 }
        })
    }

    return (
        <div>
            <p>this is board</p>
            <div className="board">
                <p>{arr}</p>
                <p>Blue {moves.blue}</p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue} >+1</button>
                <p>Red {moves.red} </p>
                <button style={{ backgroundColor: "red" }} onClick={updatered} >+1</button>
                <p>Green {moves.green} </p>
                <button style={{ backgroundColor: "green" }} onClick={updateGreen} >+1</button>
                <p>yellow {moves.yellow} </p>
                <button style={{ backgroundColor: "yellow" }} onClick={updateYellow} >+1</button>
            </div>
        </div >
    )
}