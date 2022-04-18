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

  const sortLowest = () => {
    dispatch({ type: 'sort products lowest to highest' })
  }
  const sortHighest = () => {
    dispatch({ type: 'sort products highest to lowest' })
  }
  const currentPageNext = (page) => {
    dispatch({ type: 'page - next', payload: page })
  }
  const currentPagePrevious = (page) => {
    dispatch({ type: 'page - previous', payload: page })
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
      }}
    >
      {children}
    </historyContext.Provider>
  )
}

export default HistoryContextProvider
