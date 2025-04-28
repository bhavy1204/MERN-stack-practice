import Product  from "./product.jsx";

function Title() {
    let name = "Bhavy"
    return (
        <> 
            {/* fragments  */}
            <h1>This is title</h1>
            <h5>Hello {name}</h5>
            <h5>Hello {5*5+87}</h5>
            {/* <Product/> */}
        </>
    );
}

function sum(a, b) {
    return a + b;
}

// deafult export : when signle componet and we used to use in another file with custome name 
export default Title;

// named export :
//   export {Title, sum}

