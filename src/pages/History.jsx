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
            <article key={i} className="product_History">
              <img src={product.img.url} alt={product.name} />
              <section className="info">
                <p>Cost : {product.cost}</p>
                <p>Date : {product.createDate}</p>
                <p>Name : {product.name}</p>
                <p>Category : {product.category}</p>
              </section>
            </article>
          )
        })}
      <article className="total">
        <h2>TOTAL :</h2>
        <h2>
          <img src="/icons/coin.svg" />
          {products
            .flat()
            .map((product) => product.cost)
            .reduce((a, b) => a + b, 0)}
        </h2>
      </article>
      <Footer context={historyContext} />
    </>
  )
}
