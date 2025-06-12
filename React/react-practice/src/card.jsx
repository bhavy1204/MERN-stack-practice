function Card({link, title="Not availabe",desc}) {
    return (
        <div className="card">
            <img src={link} alt="error" />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default Card;
