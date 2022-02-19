import React from 'react'
import '../styles/4.products.css'

export const Products = () => {
  return (<div className="container_products">
    <div className="card">
      <div className="container_item">
        <button className="bag"></button>
        <img className="img_product" src="../../assets/product-pics/BeatsPro-x2.png" width="100%" ></img>
      </div>
      <div className="separator_card"></div>
      <p className="category">Audio</p>
      <p className="title">Beats Pro</p>
      <div className="hover">
        <button className="bag white"></button>

        <div className="container_of_conteiner">
          <div className="container_price">
            <p className="price">12.000</p>
            <img src ="../../assets/icons/coin.svg" alt="coins" width="33px" height="33px" className="coin_product"></img>
          </div>
        </div>

        <button className="redeem_now">Redeem now</button>
      </div>
    </div>
  </div>
  )
}
