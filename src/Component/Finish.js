import React, { useContext } from 'react'
import { UserContext } from '../Provider';

function Finish() {
  const { state: {numQuestions, correct, answers}} = useContext(UserContext)
  console.log(answers)
  return (
    <div>
      {Math.floor(numQuestions / 2) < correct ?
        <h1>PARABENS, VOCÊ FICOU ACIMA DA MÉDIA. SUA PONTUAÇÃO FOI: {correct}</h1>
        :
      <h1>Não é tão fácil quanto parece! Sua pontuação foi: {correct}</h1>
    }
      <h4>Gabarito: </h4>
    </div>
  )
}

export default Finish;