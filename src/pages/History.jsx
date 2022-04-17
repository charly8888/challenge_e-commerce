import React, { useEffect, useState } from 'react'
import { Footer } from '../Components/Footer'
import { Selectors } from '../Components/Selector'
import { resultGetHistory } from '../helpers/apis/gets'
import { Header } from '/src/Components'

export const History = () => {
  const [history, setHistory] = useState([])

  useEffect(async () => {
    const arr = await resultGetHistory(
      'https://coding-challenge-api.aerolab.co/user/history'
    )
    arr.reverse()
    setHistory(arr)
    console.log(history.length)
  }, [])

  return (
    <>
      <Header home={false} />
      <Selectors />
      {history.map((product, i) => {
        return (
          <article key={i}>
            <img src={product.img.url} alt={product.name} />
            <p>{product.cost}</p>
          </article>
        )
      })}

      <h2>
        {history.map((product) => product.cost).reduce((a, b) => a + b, 0)}
      </h2>
      <Footer />
    </>
  )
}
