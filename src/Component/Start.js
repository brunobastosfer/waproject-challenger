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
        <Link className='cancel-link' to='/'>
          <Button variant="contained" color="primary">
            <span>Cancelar</span>
          </Button>
        </Link>
        <Link className='cancel-link' to="/game">
          <Button variant="contained" color="primary" renderas="button" onClick={getApi(nums)}>
            <span>Start</span>
          </Button>
        </Link>
    </div>
  )
}

export default Start