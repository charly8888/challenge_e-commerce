import React from 'react'

import '../../styles/3.selectors.css'

export const Selectors = () => {
  return (
    <>
      <div className="container_selectors">
        <p className="amount_of_products">12 of 32 products</p>
        <div className="vertical_separator"></div>
        <p className="sort_text">Sort by:</p>
        <button className="button_sort">Most recent</button>
        <button className="button_sort">Lowest price</button>
        <button className="button_sort">Highest price</button>
        <button className="before"></button>
        <button className="next"></button>
      </div>
    </>
  )
}
