export default function Price({ oldPrice = 1, newPrice = 1 }) {
    let oldStyle= {
        textDecorationLine: "line-through",
    }
    let newStyle= {
        fontWeight: "bold",
    }
    let style = {
        backgroundColor:"#e0c367",
        height:"30px",
        borderBottomLeftRadius:"5px",
        borderBottomRightRadius:"5px",
    }
    return (
        <div style={style}>
            <span style={oldStyle}> {oldPrice} </span> &nbsp;
            <span style={newStyle}> {newPrice} ! </span>
        </div>
    )
}