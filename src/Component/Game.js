import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Provider';
import GameQuestions from './GameQuestions';

function Game() {
  const { state } = useContext(UserContext)
  const { correct, wrong } = state
  const questions = state.apiQuestions
  return (
    <div>
      Numero de acertos: { correct } Numero de erros: { wrong }
      {questions.length > 0 &&
        <>{
          questions.map((item, index) => {
            return (
            <>
              <GameQuestions items={item} position={index} />
            </>
          )})}
          <div>
            <Link to='/finish'>
              <Button variant="contained" color="secondary">Finish</Button>
            </Link>
          </div>
        </>
      }
    </div>
  )
}

export default Game;