// function Card({link, title="Not availabe",desc,options="XXX", objOption=""}) {
//     return (
//         <div className="card">
//             <img src={link} alt="error" />
//             <h2>{title}</h2>
//             <p>{desc}</p>
//             <p>array :- {options}</p>
//             <p>Object option a : - {objOption.a}</p>
//             <p>Object option a : -{objOption.b}</p>
//         </div>
//     )
// }

function Card({ link, title = "Not availabe", desc, price = 1 }) {
    return (
        <div className="card">
            <img src={link} alt="error" />
            <h2>{title}</h2>
            <p>{desc}</p>
            <p>{price}</p>
            {/* <p>{price>500? "discount of 5%" : "garib  "}</p> */}
            {/* {price > 500 ? <p> "discount of 5%" </p> :null} */}
            {price > 500 && <p> discount of 5% </p>}
        </div>
    )
}

export default Card;
