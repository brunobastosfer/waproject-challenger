import React, { useContext } from 'react';
import { UserContext } from '../Provider';

function Home() {
  const {state, dispatch} = useContext(UserContext);
  const nums = state.numQuestions;

  const increment = () => {
    dispatch({ type: 'INCREMENT', payload: nums + 1})
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT', payload: nums - 1 })
  }

  return (
    <div>
      <h3>Selecione o número de perguntas</h3>
      {nums}
      <button onClick={increment}>+</button>
      {
        nums > 0 &&
      <button onClick={decrement}>-</button>
      }
    </div>
  )
}

export default Home