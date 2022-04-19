import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../Components/Header'
import { globalContext } from '../../context/globalContextProvider'
import { resultGetProducts } from '../helpers/apis/gets'

export const ShoppingCart = () => {
  const { cart, products, setProducts } = useContext(globalContext)
  const [arr, setArr] = useState([])

  useEffect(async () => {
    await setProducts(
      await resultGetProducts(
        'https://coding-challenge-api.aerolab.co/products'
      )
    )
  }, [])

  const buscar = (cart, products) => {
    let resultado = []

    for (let i = 0; i < products.length; i++) {
      for (let a = 0; a < cart.length; a++) {
        if (products[i]._id == cart[a]) {
          resultado.push(products[i])
        }
      }
    }
    return resultado
  }

  useEffect(() => {
    console.log(cart)
    console.log(products)
    setArr(buscar(cart, products.flat()))
    console.log(arr)
  }, [products, cart])

  return (
    <>
      <Header />
      {arr == false ? (
        <h1>No tienes artículos </h1>
      ) : (
        arr.map((product, i) => {
          return (
            <article key={i}>
              <h1>{product._id}</h1>
              <h1>{product.name}</h1>
              <h1>{product.cost}</h1>
            </article>
          )
        })
      )}
    </>
  )
}
