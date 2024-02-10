import React from 'react'
import { QuizContext } from '../Helpers/context'
import { useContext } from 'react'
function EndScreen() {
  const {score, setScore, setGameState} = useContext(QuizContext)
  const TryAgain = ()=>{
    setGameState('quiz')
    setScore(0)
  }
  return (
    <div className='endScreen'>
    <div >Yourt Score is {score}</div>
    <h3>{score <= 2 ? ":( Try Again!" : ":) Good Score!"}</h3>
    <button onClick={TryAgain}>Try Again</button>
    </div>
  )
}

export default EndScreen