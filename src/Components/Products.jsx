import React, { useEffect, useState, useContext } from 'react'
import { resultGetProducts } from '../helpers/apis/gets'
import '../../styles/4.products.css'
import { requestBuyProduct } from '../helpers/apis/posts'
import { globalContext } from '../../context/globalContextProvider'
import { useNavigate } from 'react-router-dom'

export const Products = () => {
  const miStorage = window.localStorage
  const {  less, products, currentPage, addToCart, totalPoints } =
    useContext(globalContext)
  console.log(totalPoints)

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
              <div className="card" key={_id} onClick={() => handleClickHover(_id)} >
                <div className="container_item">
                  {cost <= totalPoints && <button className="bag"></button>}
                  {cost > totalPoints && (
                    <div className="need_points">
                      <p>You need {cost - totalPoints}</p>
                      <img src="/icons/coin.svg" />
                    </div>
                  )}
                  <img className="img_product" src={url} width="100%"></img>
                </div>
                <div className="separator_card"></div>
                <p className="category">{category}</p>
                <p className="title">{name}</p>
                <div
                  className={cost <= totalPoints ? 'hover' : ''}
                  onClick={() => handleClickHover(_id)}
                >
                  <button
                    className={cost <= totalPoints ? 'bag white' : ''}
                    onClick={(e) => handleAddToCart(_id, e)}
                  ></button>

                  <div className="container_of_conteiner">
                    <div className="container_price">
                      {cost <= totalPoints && (
                        <>
                          <p className="price">{cost}</p>
                          <img
                            src="/icons/coin.svg"
                            alt="coins"
                            width="33px"
                            height="33px"
                            className="coin_product"
                          />
                        </>
                      )}
                    </div>
                  </div>
                  {cost <= totalPoints && (
                    <button
                      onClick={(e) => handeleBuy(_id, cost, e)}
                      className="redeem_now"
                    >
                      Redeem now
                    </button>
                  )}
                </div>
              </div>
            )
          }
        )}
    </div>
  )
}
