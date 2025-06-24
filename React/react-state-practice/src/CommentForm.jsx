import { useState } from "react"

export default function CommentForm() {

    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    })

    let handelFormInput = (event)=>{
        setFormData((currData)=>{
            return {...currData, [event.target.name]: [event.target.value]}
        })
    }

    let handelSubmit=(event)=>{
        event.preventDefault();
        setFormData({
            username:"",
            remarks:"",
            rating:5
        })
        console.log(formData);
    }

    return (
        <div>
            <h1>This is form</h1>
            <form action="" onSubmit={handelSubmit}>
                <input 
                    type="text" 
                    placeholder="username" 
                    value={formData.username} 
                    onChange={handelFormInput}
                    name="username" 
                    id="username" /> 
                <br />
                <textarea 
                    name="remarks" 
                    id="remarks" 
                    placeholder="Please leave a comment"
                    onChange={handelFormInput}
                    value={formData.remarks}>
                </textarea> 
                <br />
                <input 
                    type="number"
                    name="rating" 
                    id="rating"
                    min={1} 
                    max={5} 
                    onChange={handelFormInput}
                    value={formData.rating} /> 
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}