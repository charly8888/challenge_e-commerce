import React, { useContext } from 'react'
import { historyContext } from '../../context/historyContextProvider'

import '../../styles/3.selectors.css'
import { PAGINATION } from '../helpers/pagination'

export const Selectors = ({ context }) => {
  const {
    sortHighest,
    sortLowest,
    products,
    currentPageNext,
    currentPagePrevious,
    currentPage,
    mostRecent,
  } = useContext(context)

  return (
    <>
      <div className="container_selectors">
        <p className="amount_of_products">
          {products.slice(0, currentPage + 1).flat().length} of{' '}
          {products.flat().length} products
        </p>
        <div className="vertical_separator"></div>
        <p className="sort_text">Sort by:</p>
        {context == historyContext && (
          <button
            className="button_sort"
            onClick={() => mostRecent(PAGINATION.historyPagination)}
          >
            Most recent
          </button>
        )}
        <button
          onClick={() => sortLowest(PAGINATION.historyPagination)}
          className="button_sort"
        >
          Lowest price
        </button>
        <button
          onClick={() => sortHighest(PAGINATION.historyPagination)}
          className="button_sort"
        >
          Highest price
        </button>
        <button
          className="before"
          onClick={
            currentPagePrevious
          }
        ></button>
        <button
          className="next"
          onClick={
            currentPageNext
          }
        ></button>
      </div>
    </>
  )
}
