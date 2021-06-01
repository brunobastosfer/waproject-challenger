import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { UserContext } from '../Provider'

function GameQuestions(props) {
  const { state, dispatch } = useContext(UserContext)
  console.log(state)
  const correctAnswer = state.correct;
  const incorrectAnswer = state.wrong;
  const { category, difficulty, question } = props.items;
  const { position} = props;
  const { incorrect_answers , correct_answer, type } = props.items;

  const answered = ({ target }) => {
    if(target.textContent === correct_answer) {
      dispatch({ type: 'CORRECT', payload: correctAnswer + 1 })
    } else {
      dispatch({ type: 'WRONG', payload: incorrectAnswer - 1 })
    }
  }
  
  return (
    <div>
      <p>Acertos: {correctAnswer}</p>
      <p>Erros: {incorrectAnswer}</p>
      <h4>Questions number {position + 1} - {category}</h4>
      <p>Difficulty - <strong>{difficulty}</strong></p>
      <p></p>
      <p>{question}</p>
      {
        type === 'multiple' 
        ?
        <>{ 
          incorrect_answers.map((item) => {
          return (
              <>
               <Button onClick={answered}>{item}</Button>
              </>
          )
        })}
        <Button onClick={answered} value={correct_answer}>{correct_answer}</Button>
        </>
        : 
          <div>
            <Button onClick={answered} value={incorrect_answers}>{incorrect_answers}</Button>
            <Button onClick={answered} value={correct_answer}>{correct_answer}</Button>
          </div>
      }
    </div>
  )
}

export default GameQuestions;