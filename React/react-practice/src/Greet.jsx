function  Greet({name="user",textColor="white"}){
    let style = {color:textColor}
    return(
        <>
            <h1 style={style}>Hello , {name}!</h1>
        </>
    )
}

export default Greet;