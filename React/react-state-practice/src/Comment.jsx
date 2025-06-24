import { useState } from "react"
import "./Comment.css"
import CommentForm from "./CommentForm"

export default function Comment() {

    let [comments, setComments] = useState([{
        username: "@kali billi",
        remarks: "achi jagah thi",
        rating: 3,
    }])

    let addNewComment = (comment) => {
        setComments((currComment) => [...currComment, comment]);
        console.log("Added comment successfully");
    }

    return (
        <div>
            <CommentForm addNewComment={addNewComment}/>
            <h3>All comment</h3>
            {comments.map((comment,idx)=>(
                <div className="comment" key={idx}>
                <p>{comment.username}</p> &nbsp;
                <span>{comment.remarks}</span> &nbsp;
                <span>,rating : {comment.rating}</span> &nbsp;
            </div>
            ))}
        </div>
    )
}