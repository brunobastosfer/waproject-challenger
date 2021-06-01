import React, { useContext } from 'react';
import { UserContext } from '../Provider';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import axios from 'axios';

function Start() {
  const {state, dispatch} = useContext(UserContext);
  const nums = state.numQuestions

  const getApi = (param) => () => {
    axios.get(`https://opentdb.com/api.php?amount=${param}`)
      .then((res) => {
        dispatch({
          type: 'SUCCESS', payload: res.data.results
        })
      })
  }

  return (
    <div>
      <Button variant="contained" color="primary">
        <Link className='cancel-link' to='/'>Cancelar</Link>
      </Button>
      <Button variant="contained" color="primary" href='/game' onClick={getApi(nums)}>
        Iniciar
      </Button>
      <Link color="primary" to="/game">
        <Button renderas="button" onClick={getApi(nums)}>
        <span>Login</span>
        </Button>
      </Link>
    </div>
  )
}

export default Start