import React, { useEffect, useState, useContext } from 'react'
import { resultGetProducts } from '../helpers/apis/gets'
import '../../styles/4.products.css'
import { requestBuyProduct } from '../helpers/apis/posts'
import { globalContext } from '../../context/globalContextProvider'
import { useNavigate } from 'react-router-dom'

export const Products = () => {
  const { setProducts, less, products, currentPage } = useContext(globalContext)

  useEffect(async () => {
    setProducts(
      await resultGetProducts(
        'https://coding-challenge-api.aerolab.co/products'
      )
    )
  }, [])

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
  let navigate = useNavigate()
  const handleClickHover = (id) => {
    navigate(`product/${id}`)
  }
  console.log(products)

  return (
    <div className="container_products">
      {products.length >= 1 &&
        products[currentPage].map(
          ({ _id, category, cost, img: { url }, name }) => {
            return (
              <div className="card" key={_id}>
                <div className="container_item">
                  <button className="bag"></button>
                  <img className="img_product" src={url} width="100%"></img>
                </div>
                <div className="separator_card"></div>
                <p className="category">{category}</p>
                <p className="title">{name}</p>
                <div className="hover" onClick={() => handleClickHover(_id)}>
                  <button className="bag white"></button>

                  <div className="container_of_conteiner">
                    <div className="container_price">
                      <p className="price">{cost}</p>
                      <img
                        src="/icons/coin.svg"
                        alt="coins"
                        width="33px"
                        height="33px"
                        className="coin_product"
                      ></img>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handeleBuy(_id, cost, e)}
                    className="redeem_now"
                  >
                    Redeem now
                  </button>
                </div>
              </div>
            )
          }
        )}
    </div>
  )
}
