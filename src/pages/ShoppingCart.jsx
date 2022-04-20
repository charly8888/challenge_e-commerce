import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../Components/Header'
import { globalContext } from '../../context/globalContextProvider'
import { resultGetProducts } from '../helpers/apis/gets'
import css from '/styles/cartPage.module.scss'
import { getTotalFromProducts } from '../helpers/getTotalFromProducts'
import { requestBuyProduct } from '../helpers/apis/posts'
import { pasarDeArrayAObjeto } from '../helpers/pasarDeArrayAObjeto'
import { pasarDeArrayDeObjASoloDeIDs } from '../helpers/pasarDeArrayDeObjASoloDeIDs'

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
    setArr(pasarDeArrayAObjeto(buscar(cart, products.flat())))
  }, [products, cart])
  console.log('arr', arr)

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

  function handleAdd(i) {
    let newArr = [...arr]
    newArr[i].cantidad = newArr[i].cantidad + 1
    setArr(newArr)
  }
  function handleLess(i) {
    let newArr = [...arr]
    newArr[i].cantidad = newArr[i].cantidad - 1
    setArr(newArr)
  }

  return (
    <>
      <Header />
      {arr == false ? (
        <h1 className={css.noItems}>You don't have items</h1>
      ) : (
        <main className={css.container}>
          {arr.map((product, i) => {
            return (
              <article key={i} className={css.item}>
              <div  className={css.img}>
                <img src={product.img.url} />
              </div>
                <section className={css.infoProduct}>
                  <h1>{product.name}</h1>
                  <h1>{product.cost * product.cantidad}</h1>
                  <button className={css.swap}  onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                  <button onClick={() => handleAdd(i)} className={`${css.swap} ${css.buttonSmall}`}>+1</button>
                  {product.cantidad}
                  {product.cantidad > 1 && (
                    <button onClick={() => handleLess(i)} className={`${css.swap} ${css.buttonSmall}`}> -1</button>
                  )}
                </section>
              </article>
            )
          })}
          <footer className="footer_shoppingCart">
            <h2>Total : {total}</h2>
            {total <= totalPoints ? (
              <button className={css.swap}
                onClick={(e) =>
                  handeleBuy(e, pasarDeArrayDeObjASoloDeIDs(arr), total)
                }
              >
                Swap
              </button>
            ) : (
              <button className={`${css.swap} ${css.needMore}`}>You need {total - totalPoints} points</button>
            )}
          </footer>
        </main>
      )}
    </>
  )
}
