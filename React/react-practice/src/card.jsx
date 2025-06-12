function Card({link, title="Not availabe",desc,options="XXX", objOption=""}) {
    return (
        <div className="card">
            <img src={link} alt="error" />
            <h2>{title}</h2>
            <p>{desc}</p>
            <p>array :- {options}</p>
            <p>Object option a : - {objOption.a}</p>
            <p>Object option a : -{objOption.b}</p>
        </div>
    )
}

export default Card;
