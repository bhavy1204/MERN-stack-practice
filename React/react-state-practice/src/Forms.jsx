// Why forms are different in react? 
// => Because forms in html have their own state which changes based on user input. But than what is use of react's state? Thus we make a stae for forms in react only which act as single source of truth. All the state are thus maintained by react only. ad not by the elements themselves.

import { useState } from "react"



export default function Forms() {
    // This way is not the best way to handel multiple values in the form as they are long and it is not feasable to make a seprate State for each input of form thus we try to make a common handeler in form. 
    // let [fullName, setName] = useState("Hello?");
    // let [userName, setUsername] = useState("Hello@123");

    // We made an object for all data in form 
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
    })

    // let handleName = (event) => {
    //     // console.log(event.target.value);
    //     setFormData(event.target.value);
    // }

    // let handleUsername = (event) => {
    //     // console.log(event.target.value);
    //     setUsername(event.target.value);
    // }

    // in the folowing function we must know where the change happend , what change happend
    let handelFormInput = (event) => {
        let fieldname = event.target.name;
        let newVal = event.target.value;
        // console.log(fieldname+" >> "+newVal);
        // Sirf object ki key me change karn enough nhi hota jo puri object hoti hai usko reconstruct karke send karna hota hai tabhi vo change valid mana jata hai.
        setFormData((currData) => {
            // When we write variable in square property that means "computed property name" matlab apane ko property access karni ho par apne ko uska exact naam nhi pata ho. To pehle square bracket ki value evaluate hogi aur uske baad use hogi.
            // currData[fieldname] = newVal;
            return { ...currData, [fieldname]:newVal };
        });
    }

    let handelSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName: "",
            username: "",
        })
        console.log(formData);
    }


    return (
        <>
            {/* "For" is a resevved keyword in js thus we use htmlFor, but DOM ke andar inspect karke dekhenge tab to for hi likha aayega htmlFor nhi , Ye prrof hai ki jsx ka syntax file tak hi hota hai , ye fir transpile vagera hoti hai... */}
            <form action="" onSubmit={handelSubmit}>
                <label htmlFor="name">Enter name</label>
                <input
                    type="text"
                    placeholder="naam bata"
                    value={formData.fullName}
                    onChange={handelFormInput}
                    id="name"
                    // Ye "fullname" hi hona chaiye kyuki apan ne form data object me, key ka naam bhi yahi likha hai basically dono same hone chaiye
                    name="fullName"

                />
                <br />
                <label htmlFor="username">userName</label>
                <input
                    type="text"
                    placeholder="user naam bata"
                    value={formData.username}
                    onChange={handelFormInput}
                    id="username"
                    name="username"
                />
                <br /><button>Submit</button>
            </form>
        </>
    )
    // Flow of states 
    //  Input change -> onChange -> handelName -> setName -> fullName
    // Input ki value kabhi bhi dekhni ho to apne state variable ko dekh lo (is case me fullName)
    // React ne apne input element ko completely control karlia to react ke andar, form ke andar jo elemets hote vo controlled components ban jaate hai kyuki react ne unko control kar lia hai, using State variables.
}