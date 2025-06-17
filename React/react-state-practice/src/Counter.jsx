//  let i=0;
// function increae(){
//     i++;
//     console.log(i);
// }

import { useState } from "react"

export default function Counter() {
    // let [statevariable,set]= useState(0);
    let [count, setCount] = useState(0);
    // console.log(arr);
    console.log("Re rendering")
    console.log("Outer count : " + count ) //Proof that the value of variable is updated at ren render time and not when we call the function.

    let increaseCount = () => {
        // count++; Will not re render the componenet
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1); //We expect them to increase by 3 but they are asynchronous function so here it is unpredictable.
        // Updater function (increaseCount) can be of 2 types:- one is where the value is depending upon the current value like we did and another is where it is aribitary value.
        // this below will work as expected beause we are using callbacks 
        setCount((currentCount)=>{
            return currentCount+1;
        })
        setCount((currentCount)=>{
            return currentCount+1;
        })
        setCount((currentCount)=>{
            return currentCount+1;
        })
        console.log("Inner count : " + count);
    }

    return (
        <>
            <h3>COunt = {count}</h3>
            <button onClick={increaseCount} >Increase</button>
        </>
    )
}