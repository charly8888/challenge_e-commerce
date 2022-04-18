import React, { useContext } from 'react'
import { globalContext } from '../../context/globalContextProvider'

import '../../styles/3.selectors.css'

export const Selectors = ({ context }) => {
  const {
    sortHighest,
    sortLowest,
    products,
    currentPageNext,
    currentPagePrevious,
    currentPage,
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
        <button className="button_sort">Most recent</button>
        <button onClick={sortLowest} className="button_sort">
          Lowest price
        </button>
        <button onClick={sortHighest} className="button_sort">
          Highest price
        </button>
        <button
          className="before"
          onClick={() => {
            currentPagePrevious(currentPage)
          }}
        ></button>
        <button
          className="next"
          onClick={() => {
            currentPageNext(currentPage)
          }}
        ></button>
      </div>
    </>
  )
}
