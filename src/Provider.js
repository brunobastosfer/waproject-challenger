import React, { createContext, useReducer } from 'react'
import { INITIAL_STATE } from './initialState'

export const UserContext = createContext() 

const reducer = (state, action) => {
  console.log(action)
  switch(action.type){
    case 'INCREMENT':
      return {
        ...state,
        numQuestions: action.payload,
      }
    case 'DECREMENT':
      return {
        ...state,
        numQuestions: action.payload,
      }
    case 'SUCCESS':
      return {
        ...state,
        apiQuestions: action.payload,
      }
    case 'CORRECT':
      return {
        ...state,
        correct: action.payload,
      }
    case 'WRONG':
      return {
        ...state,
        wrong: action.payload
      }
    case 'RES':
      return {
        ...state,
        answers: action.load
      }
  default:
    return state;
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}