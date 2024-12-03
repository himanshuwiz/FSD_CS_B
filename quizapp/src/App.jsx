import { useState } from 'react'
import './App.css'


const Quiz = (props) => {
  

  return (
    <>
      <h1>My Quiz App type={props.type}</h1>
      <h1>Quiz Marks type={props.marks}</h1>
    </>
  )
}

export default App
const [count,setCount] =useState(0)