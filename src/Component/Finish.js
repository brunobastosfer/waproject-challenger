import React, { useContext } from 'react'
import { UserContext } from '../Provider';

function Finish() {
  const { state: {numQuestions, correct}} = useContext(UserContext)
  console.log(numQuestions, correct)
  return (
    <div>
      {Math.floor(numQuestions / 2) < correct ?
        <h1>PARABENS, VOCÊ FICOU ACIMA DA MÉDIA. SUA PONTUAÇÃO FOI: {correct}</h1>
        :
      <h1>Não é tão fácil quanto parece! Sua pontuação foi: {correct}</h1>
      }
    </div>
  )
}

export default Finish;