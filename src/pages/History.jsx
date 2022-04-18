import React, { useEffect, useState, useContext } from 'react'
import { globalContext } from '../../context/globalContextProvider'
import { historyContext } from '../../context/historyContextProvider'
import { Footer } from '../Components/Footer'
import { Selectors } from '../Components/Selector'
import { resultGetHistory } from '../helpers/apis/gets'
import { PAGINATION } from '../helpers/pagination'
import { Header } from '/src/Components'

export const History = () => {
  const { products, currentPage, setProducts } = useContext(historyContext)

  useEffect(async () => {
    setProducts(
      await resultGetHistory(
        'https://coding-challenge-api.aerolab.co/user/history'
      ),
      PAGINATION.historyPagination
    )
  }, [])

  return (
    <>
      <Header home={false} />
      <Selectors context={historyContext} />
      {products.length >= 1 &&
        products[currentPage].map((product, i) => {
          return (
            <article key={i}>
              <img src={product.img.url} alt={product.name} />
              <p>{product.cost}</p>
              <p>{product.createDate}</p>
            </article>
          )
        })}

      <h2>
        {products
          .flat()
          .map((product) => product.cost)
          .reduce((a, b) => a + b, 0)}
      </h2>
      <Footer context={historyContext} />
    </>
  )
}
