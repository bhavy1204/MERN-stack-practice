import { useState } from "react"

export default function LikeButton() {
    let [isLike, setisLike] = useState(false);
    let toggleLike = () => {
        setisLike(!isLike)
    }
    return (
        <>
            <p onClick={toggleLike}>
                {isLike ? <i className="bi bi-heart-fill"></i>: <i className="bi bi-suit-heart"></i> }
            </p>
        </>
    )

}


