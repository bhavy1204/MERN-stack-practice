// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import "./app.css"
import Title from "./Title.jsx"

function App() {//This function is our app component aur jo ye return karega vo apna UI ban jayega
  // return <h1>This is first demo </h1>;
  //return <button>Demo</button>; //only 1 html element return is allowed in one function/componet
  // return <Title/>
  return (//If we dont puut bracket here than react will think that nothing is returened due to gap thus we have to put bracket here if we want that gap/line.
  <div>
      <button>This is btn 1</button>
      <button>This is btn 2</button>
      <Title/> 
      <Title/>
  </div> //By this way we can render multiple elements in a single return.
  );
}
// AB har componet jese ki title etc ki ek alag jsx file banti hai src me. 

export default App;