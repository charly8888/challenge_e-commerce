import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../Components/Header'
import { globalContext } from '../../context/globalContextProvider'
import { resultGetProducts } from '../helpers/apis/gets'
import css from '/styles/cartPage.module.scss'
import { getTotalFromProducts } from '../helpers/getTotalFromProducts'
import { requestBuyProduct } from '../helpers/apis/posts'

export const ShoppingCart = () => {
  const { cart, products, setProducts, addToCart, totalPoints, less } =
    useContext(globalContext)
  const [arr, setArr] = useState([])
  const miStorage = window.localStorage
  const total = getTotalFromProducts(arr)
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

  const handeleBuy = (e, id, cost) => {
    e.stopPropagation()
    if (typeof id === 'object') {
      id.forEach(async (id) => {
        const res = await requestBuyProduct({
          productId: id,
        })
        if (res.statusText === 'OK') {
          console.log('todo bien, artículo comprado')
        } else {
          console.error('no se pudo comprar, faltan puntos')
        }
      })
    }
    less(cost)
    miStorage.removeItem('productsCart')
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
          <footer className="footer_shoppingCart">
            <h2>Total : {total}</h2>
            {total <= totalPoints ? (
              <button onClick={(e) => handeleBuy(e, cart, total)}>Swap</button>
            ) : (
              <button>You need {total - totalPoints} points</button>
            )}
          </footer>
        </main>
      )}
    </>
  )
}
