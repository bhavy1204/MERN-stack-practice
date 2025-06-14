import "./Product.css"
import Price from "./price";

function Product({heading="Heading" , desc="Description" , img="",idx}){
    let oldPrice=["3056", "2300","7000","9000"];
    let newPrice=["2999","1999","4999","5999"];
    return(
    <div className="product">
        <h3>{heading}</h3>
        <p>{desc}</p>
        <img src={img} alt="" />
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
    </div>
    )
}

export default Product;