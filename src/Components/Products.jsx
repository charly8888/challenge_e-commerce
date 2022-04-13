import React from 'react'
import { useEffect, useState } from 'react'
import { resultGetProducts } from '../helpers/apis/gets'
import '../../styles/4.products.css'
import { requestBuyProduct } from '../helpers/apis/posts'

export const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    setProducts(
      await resultGetProducts(
        'https://coding-challenge-api.aerolab.co/products'
      )
    )
  }, [])

  return (
    <div className="container_products">
      {products.map(({ _id, category, cost, img: { url }, name }) => {
        return (
          <div className="card" key={_id}>
            <div className="container_item">
              <button className="bag"></button>
              <img className="img_product" src={url} width="100%"></img>
            </div>
            <div className="separator_card"></div>
            <p className="category">{category}</p>
            <p className="title">{name}</p>
            <div className="hover">
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
                onClick={() =>
                  requestBuyProduct({
                    productId: _id,
                  })
                }
                className="redeem_now"
              >
                Redeem now
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
