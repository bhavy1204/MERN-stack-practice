//  let i=0;
// function increae(){
//     i++;
//     console.log(i);
// }

import { useState } from "react"

export default function Counter(){
    // let [statevariable,set]= useState(0);
    let [ count,setCount] = useState(0);
    // console.log(arr);

    let increaseCount =()=>{
        // count++; Will not re render the componenet
        setCount(count+1);
        console.log(count);
    }

    return(
        <>
            <h3>COunt = {count}</h3>
            <button onClick={increaseCount} >Increase</button>
        </>
    )
}