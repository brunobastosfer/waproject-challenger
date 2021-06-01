import React, { useContext, useReducer } from 'react';
import { UserContext } from '../Provider';
import GetApi  from '../services/getApi';
import GameQuestions from './GameQuestions';

function Game() {
  const {state, dispatch} = useContext(UserContext);
  const questions = state.apiQuestions
  return (
    <div>
      {questions.length > 0 &&
          questions.map((item) => <GameQuestions key={item.question} items={item} />)
      }
    </div>
  )
}

export default Game;