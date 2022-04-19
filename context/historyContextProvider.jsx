import { createContext, useReducer } from 'react'
import { reducer } from './reducer'

export const historyContext = createContext()

const INITIAL_STATE = {
  products: [],
  currentPage: 0,
}

const HistoryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const setProducts = (products, pagination) => {
    dispatch({ type: 'products', payload: { products, pagination } })
  }

  const sortLowest = (pagination) => {
    dispatch({ type: 'sort products lowest to highest', payload: pagination })
  }
  const sortHighest = (pagination) => {
    dispatch({
      type: 'sort products highest to lowest',
      payload: pagination,
    })
  }
  const currentPageNext = () => {
    dispatch({ type: 'page - next' })
  }
  const currentPagePrevious = () => {
    dispatch({ type: 'page - previous' })
  }
  const mostRecent = (page) => {
    dispatch({ type: 'sort - most recent', payload: page })
  }

  return (
    <historyContext.Provider
      value={{
        ...state,
        setProducts,
        sortLowest,
        sortHighest,
        currentPageNext,
        currentPagePrevious,
        mostRecent,
      }}
    >
      {children}
    </historyContext.Provider>
  )
}

export default HistoryContextProvider
