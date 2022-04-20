import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../Components/Header'
import css from '../../styles/productPage.module.scss'
import { globalContext } from '../../context/globalContextProvider'
import { requestBuyProduct } from '../helpers/apis/posts'

export const Product = () => {
  let params = useParams()
  const [product, setProduct] = useState([])
  const { products, addToCart, totalPoints, less } = useContext(globalContext)
  const miStorage = window.localStorage

  useEffect(() => {
    console.log(products, 'products')
    setProduct(products.flat().filter((e) => e._id === params.invoiceId))
  }, [products])
  console.log(product, 'product')

  const handleAddToCart = (id, e) => {
    e.stopPropagation()
    const Storage = JSON.parse(localStorage.getItem('productsCart')) || []
    Storage.push(id)
    // console.log(Storage)
    miStorage.setItem('productsCart', JSON.stringify(Storage))
    addToCart()
  }
  const handeleBuy = async (id, cost, e) => {
    e.stopPropagation()
    const res = await requestBuyProduct({
      productId: id,
    })
    if (res.statusText === 'OK') {
      less(cost)
    } else {
      console.error('no se pudo comprar, faltan puntos')
    }
  }
  return (
    <>
      <Header />
      {product.length === 0 ? (
        <h1>Cargando</h1>
      ) : (
        <main className={css.containerProduct}>
          <section className={css.product}>
          <img src={product[0].img.hdUrl} alt={product[0].name} className={css.imgProduct}/>
          <section className={css.containerDescription}>
            <h1 className={css.heading}>{product[0].name}</h1>
            <h1 className={css.cost}>{product[0].cost}</h1>
            <h1 className={css.category}>{product[0].category}</h1>
          </section>

          </section>
          <section className={css.buySection}> 

          <button
            className={` ${css.addToCart}  bag `}
            onClick={(e) => handleAddToCart(product[0]._id, e)}
          ></button>

          {product[0].cost <= totalPoints && (
            <button
              onClick={(e) => handeleBuy(product[0]._id, product[0].cost, e)}
              className={`${css.redeemNow} redeem_now`}
            >
              Redeem now
            </button>
          )}
          {product[0].cost > totalPoints && (
            <div className={`${css.redeemNow} need_points`}>
              <p>You need {product[0].cost - totalPoints}</p>
              <img src="/icons/coin.svg" />
            </div>
          )}
          </section>
        </main>
      )}
    </>
  )
}
