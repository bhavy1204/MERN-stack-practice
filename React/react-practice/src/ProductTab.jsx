import Product from "./product";
import "./App.css"

function ProductTab() {
    return (
        <>
        <hr />
            <h1>G**d faad deals</h1>
            <div className="cardList">
                <Product heading="Mouse" desc="Nice mouse" img="vite.svg" idx={0} />
                <Product heading="keyboard" desc="good keyboard" img="vite.svg" idx={1} />
                <Product heading="monitor" desc="hd display monitor" img="vite.svg" idx={2} />
                <Product heading="speaker" desc="loud speakers" img="vite.svg" idx={3} />
            </div>
        </>

    )
}

export default ProductTab;