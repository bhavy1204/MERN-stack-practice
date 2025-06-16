function submitForm(event){
    event.preventDefault(); //event object has many default behaviours which comes in between of devlopment to fix them we do this.
    console.log("Haa de diya tera form par nhi hoga sellection");
}

function  sayGaali(){
    alert("amma behan pe aa jaunga !!")
}

export default function Form(){
    return(
        <form onSubmit={submitForm} onMouseOver={sayGaali}>
            <input type="text" />
            <button>Submit</button>
        </form>
    )
}