import "./App.css"
import Title from "./Title.jsx" // for deafult
import Calc from "./Calculation.jsx"
import CardList from "./CardList";
import Greet from "./Greet.jsx";

import ProductTab from "./Producttab.jsx";
// import {Title} from "./Title.jsx" // for named export

// For EVENT handling
import Button from "./button.jsx";
import Form from "./form.jsx";

// // 2 componets ko apan vese hi function jese create karte ha 
// function Title() {
//   return <h1>Hello Billi dobara! </h1>
//   // Ab isko render karane ke liye isko html tag ki tarah likhte hai. <Title/> 
      // 3 Ab isko dusri file me bhej dia kyuki har component kki alag file honi chaiye 
// }

//1 Ye App function hi apna app comonent hi hai , ye jo bhi return karega vo apna UI ban jayega
function App() {
  // return <h1>Hello billi ! </h1>;
  return (
    <>
      {/* <Greet name="ram" textColor="red"/>
      <Greet name="shyam" textColor="yellow"/>
      <Greet textColor="blue"/>
      <CardList/>
      <Title/>
      <Calc/>
      <p>Hello world this is example of the paragraph</p>
      <ProductTab/> */}
      <Button/>
      <Form/>
    </>
  )
}

export default App
