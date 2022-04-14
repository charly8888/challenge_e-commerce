import React, { useReducer, createContext } from 'react'
import { requestPoints } from '../src/helpers/apis/posts'
import { reducer } from './reducer'

export const globalContext = createContext()

const INITIAL_STATE = {
  totalPoints: 0,
  name: '',
}

const handlerAddPoints = (amount) => requestPoints({ amount })

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const setAdd1000 = () => {
    dispatch({ type: 'small' })
    handlerAddPoints(1000)
  }
  const setAdd5000 = () => {
    dispatch({ type: 'normal' })
    handlerAddPoints(5000)
  }
  const setAdd7500 = () => {
    dispatch({ type: 'large' })
    handlerAddPoints(7500)
  }
  const setUser = (user) => {
    dispatch({ type: 'user', payload: user })
  }
  const setPoints = (points) => {
    dispatch({ type: 'points', payload: points })
  }

  return (
    <globalContext.Provider
      value={{
        ...state,
        setAdd1000,
        setAdd5000,
        setAdd7500,
        setUser,
        setPoints,
      }}
    >
      {children}
    </globalContext.Provider>
  )
}

export default GlobalContextProvider
