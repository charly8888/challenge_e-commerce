import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../Components/Header'
import { globalContext } from '../../context/globalContextProvider'
import { resultGetProducts } from '../helpers/apis/gets'
import css from '/styles/cartPage.module.scss'

export const ShoppingCart = () => {
  const { cart, products, setProducts, addToCart } = useContext(globalContext)
  const [arr, setArr] = useState([])
  const miStorage = window.localStorage
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

  function handleDelete(id) {
    const newStorage = cart.filter((e) => e !== id)
    miStorage.setItem('productsCart', JSON.stringify(newStorage))
    addToCart()
  }
  return (
    <>
      <Header />
      {arr == false ? (
        <h1>No tienes artículos </h1>
      ) : (
        <main className={css.container}>
          {arr.map((product, i) => {
            return (
              <article key={i} className={css.item}>
                <img src={product.img.url} />
                <section className={css.infoProduct}>
                  <h1>{product.name}</h1>
                  <h1>{product.cost}</h1>
                  <button onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                </section>
              </article>
            )
          })}
          <footer></footer>
        </main>
      )}
    </>
  )
}
