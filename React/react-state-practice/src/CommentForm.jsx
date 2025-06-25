import { useState } from "react"
// To add validation for forms we use formik, it wil handel submission,input and output, validations , state etc. 
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'bsdk username tera baap dega?';
    }

    return errors;
};

export default function CommentForm({ addNewComment }) {

    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5
    // })
    // Formik :- 
    const formik = useFormik({
        initialValues: {
            username: "",
            remarks: "",
            rating: 5
        },
        validate,
        onSubmit: values => {
            addNewComment(values);
            // console.log(values)
            // alert(JSON.stringify(values, null, 2));
        },
    });

    // let handelFormInput = (event) => {
    //     setFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value }
    //     })
    // }

    // let handelSubmit = (event) => {
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 5
    //     })
    //     console.log(formData);
    // }

    return (
        <div>
            <h1>This is form</h1>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    placeholder="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    name="username"
                    id="username" />
                <br />
                {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                <textarea
                    name="remarks"
                    id="remarks"
                    placeholder="Please leave a comment"
                    onChange={formik.handleChange}
                    value={formik.values.remarks}>
                </textarea>
                <br />
                <input
                    type="number"
                    name="rating"
                    id="rating"
                    min={1}
                    max={5}
                    onChange={formik.handleChange}
                    value={formik.values.rating} />
                <br />
                <button type="Submit">Submit</button>
            </form>
        </div>
    )
}