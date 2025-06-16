import { useState } from "react"

export default function LikeButton() {
    let [isLike, setisLike] = useState(false);
    let toggleLike = () => {
        let newVal = !isLike;
        setisLike(!isLike)
    }
    return (
        <>
            <p onClick={toggleLike}>
                {isLike ? <span class="material-symbols-outlined">
                    favorite
                </span> : <span class="material-symbols-outlined">
                    heart_check
                </span>

                }
            </p>
        </>
    )

}


