import React, { useContext } from 'react'
import { UserContext } from '../Provider';

function Finish() {
  const state = useContext(UserContext)
  const { state: { answers, apiQuestions } } = state;
  const { state: { numQuestions, correct}} = state;

  const questions = apiQuestions.map((item) => {{
    return {
    question: item.question,
    Correctresponse: item.correct_answer,
    userAnswer: answers.map((item) => item)
  }}})

  return (
    <div>
      {Math.floor(numQuestions / 2) < correct ?
        <h1>PARABENS, VOCÊ FICOU ACIMA DA MÉDIA. Você acertou: {correct} de {numQuestions}</h1>
        :
      <h1>Não é tão fácil quanto parece! Você acertou: {correct} de {numQuestions}</h1>
      }
      <h4>Gabarito: </h4>
      <div>
        {
          questions.map((item, index) => 
          { return (
          <div>
            <div>{item.question}</div>
            <div>
              <p>Your Answer: {item.userAnswer[index]}</p>
              <p>Correct Answer: {item.Correctresponse}</p>
            </div>
          </div>
          )
          })
        }
      </div>
    </div>
  )
}

export default Finish;