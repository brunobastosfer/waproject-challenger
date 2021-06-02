import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { UserContext } from '../Provider'

function GameQuestions(props) {
  const { state, dispatch, answers } = useContext(UserContext)
  const correctAnswer = state.correct;
  const incorrectAnswer = state.wrong;
  const { category, difficulty, question } = props.items;
  const { position} = props;
  const { incorrect_answers , correct_answer, type } = props.items;
  const resolved = []

  const answered = ({ target }) => {
    const father = target.parentNode;
    father.classList.add('Mui-disabled')
    resolved.push(target.textContent)
    dispatch({ type: 'RES', payload: answers } )
    if(target.textContent === correct_answer) {
      dispatch({ type: 'CORRECT', payload: correctAnswer + 1 })
    } else {
      dispatch({ type: 'WRONG', payload: incorrectAnswer + 1 })
    }
  }
  
  return (
    <div>
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
               <Button variant = "contained" disable={'true'} color = "primary" onClick={answered}>{item}</Button>
              </>
          )
        })}
        <Button variant="contained" color="primary" onClick={answered} value={correct_answer}>{correct_answer}</Button>
        </>
        : 
          <div>
            <Button variant="contained"  color="primary" onClick={answered} value={incorrect_answers}>{incorrect_answers}</Button>
            <Button variant="contained" color="primary" onClick={answered} value={correct_answer}>{correct_answer}</Button>
          </div>
      }
    </div>
  )
}

export default GameQuestions;