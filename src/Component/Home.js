import React, { useContext } from 'react';
import { Button } from '@material-ui/core'
import { UserContext } from '../Provider';
import { Link } from 'react-router-dom';

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
      <Button variant="contained" onClick={increment}>+</Button>
      {
        nums > 0 &&
      <Button variant="contained" onClick={decrement}>-</Button>
      }
      <div>
        <Button variant="contained" color="primary">
          <Link className='cancel-link' to='/start'>Iniciar</Link>
        </Button>
      </div>
    </div>
  )
}

export default Home