import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LudoBoard from './LudoBoard'
import ToDOList from './ToDoList'
import Lottery from './Lottery'
import Ticket from './Ticket'

function App() {

  return (
    <>
      <Lottery n={5} winingSum={10}/>
      {/* <Ticket ticket={[1,2,3]}/> */}
      {/* <Lottery/> */}
      {/* <ToDOList></ToDOList> */}
      {/* <LudoBoard/> */}
    </>
  )
}

export default App
