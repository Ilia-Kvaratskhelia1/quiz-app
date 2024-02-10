import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../Helpers/context'
import "../app.css"
export default function MainMenu() {
    const {gameState, setGameState} = useContext(QuizContext)
    console.log(Math.floor(Math.random() * 2)+2)
  return (
    <div className='Menu'>
        <button className='MenuButton' onClick={()=>setGameState("quiz")}>Start Quiz</button>
    </div>
  )
}
