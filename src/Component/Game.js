import React, { useContext } from 'react';
import { UserContext } from '../Provider';
import GameQuestions from './GameQuestions';

function Game() {
  const {state} = useContext(UserContext);
  const questions = state.apiQuestions
  return (
    <div>
      {questions.length > 0 &&
          questions.map((item, index) => <GameQuestions items={item} position={index} />)
      }
    </div>
  )
}

export default Game;