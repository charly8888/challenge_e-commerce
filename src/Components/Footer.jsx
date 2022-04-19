import React, { useContext } from 'react'
import '../../styles/5.footer.css'

export const Footer = ({ context }) => {
  const { products, currentPage, currentPagePrevious, currentPageNext } =
    useContext(context)
  return (
    <footer>
      <p className="amount_of_products">
        {' '}
        {products.slice(0, currentPage + 1).flat().length} of{' '}
        {products.flat().length} products
      </p>

      <button className="before" onClick={currentPagePrevious}></button>
      <button className="next next_footer" onClick={currentPageNext}></button>
    </footer>
  )
}
