import React from 'react'
import {useCurrentPag}  from '../hooks/currentPag'
import { resultGetProducts } from '../logic/fetchProducts'
import { Products } from './Products'

import '../styles/3.selectors.css'
import '../styles/5.footer.css'

let totalProducts = resultGetProducts.flat().length
let acumulado = (pag )=>{
  let acc = resultGetProducts.slice(0, pag + 1 )
  let b =  acc.flat().length
  return b
}

export const Selectors = () => {
  const {pag,increment, decrement}= useCurrentPag()
  return (<>
    <div className="container_selectors">
      <p className="amount_of_products">{acumulado(pag)} of {totalProducts} products</p>
      <div className="vertical_separator"></div>
      <p className="sort_text">Sort by:</p>
      <button className="button_sort">Most recent</button>
      <button className="button_sort">Lowest price</button>
      <button className="button_sort">Highest price</button>
      <button className="before" onClick={decrement}></button>
      <button className="next" onClick={increment}></button>
    </div>
    <Products pag={pag}/>
    <footer>
      <p className="amount_of_products">{acumulado(pag)} of {totalProducts}</p>
      <button className="before" onClick={decrement}></button> 
      <button className="next next_footer" onClick={increment}></button>
    </footer>
  </>
  )
}
