import React, { useContext } from 'react'
import { UserContext } from '../Provider';

function Finish() {
  const state = useContext(UserContext)
  const { state: { response, type, apiQuestions } } = state;
  const { state: { numQuestions, correct, resCorrect, resWrong }} = state;

  const questions = apiQuestions.map((item) => {{
    return {
    question: item.question,
    Correctresponse: item.correct_answer,
    IncorrectResponse: item.incorrect_answers,
    resCorrect: resCorrect.map((item) => item),
    resWrong: resWrong.map((item) => item),
  }}})

  return (
    <div>
      {Math.floor(numQuestions / 2) < correct ?
        <h1>PARABENS, VOCÊ FICOU ACIMA DA MÉDIA. Você acertou: {correct} de {numQuestions}</h1>
        :
      <h1>Não é tão fácil quanto parece! Você acertou: {correct} de {numQuestions}</h1>
      }
      <h4>Gabarito: </h4>
    </div>
  )
}

export default Finish;