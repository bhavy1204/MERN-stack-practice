import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LudoBoard from './LudoBoard'
import ToDOList from './ToDoList'
import Lottery from './Lottery'
import Ticket from './Ticket'
import { sum } from './helper'

function App() {

  let winCondition = (ticket)=>{
    // return sum(ticket)===15;
    return ticket.every((num)=> num===ticket[0]);
  }

  return (
    <>
      <Lottery winCondition = {winCondition}/>
      {/* <Ticket ticket={[1,2,3]}/> */}
      {/* <Lottery/> */}
      {/* <ToDOList></ToDOList> */}
      {/* <LudoBoard/> */}
    </>
  )
}

export default App
