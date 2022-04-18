import React, { useReducer, createContext } from 'react'
import { requestPoints } from '../src/helpers/apis/posts'
import { reducer } from './reducer'

export const globalContext = createContext()

const INITIAL_STATE = {
  totalPoints: 0,
  name: '',
  products: [],
  cart: [],
  currentPage: 0,
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
  const setProducts = (products, pagination) => {
    dispatch({ type: 'products', payload: {products, pagination} })
  }
  const sortLowest = () => {
    dispatch({ type: 'sort products lowest to highest' })
  }
  const sortHighest = () => {
    dispatch({ type: 'sort products highest to lowest' })
  }
  const less = (count) => {
    dispatch({ type: 'buy', payload: count })
  }
  const currentPageNext = (page) => {
    dispatch({ type: 'page - next', payload: page })
  }
  const currentPagePrevious = (page) => {
    dispatch({ type: 'page - previous', payload: page })
  }
  const addToCart = (id) => {
    dispatch({ type: 'add to cart', payload: id })
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
        setProducts,
        sortLowest,
        less,
        sortHighest,
        currentPageNext,
        currentPagePrevious,
        addToCart,
      }}
    >
      {children}
    </globalContext.Provider>
  )
}

export default GlobalContextProvider
