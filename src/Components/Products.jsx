import React from 'react'
import { resultGetProducts } from '../logic/fetchProducts'
import '../styles/4.products.css'


// const totalProducts = resultGetProducts.length
// console.log('Total de productos',totalProducts)




export const Products = ({pag}) => {
  
  
  // const {pag} = useCurrentPag()

  // useEffect(() => {
  // }, [increment,decrement])

  return (
    <div className="container_products">
      {resultGetProducts[pag].map( ({_id, category, cost, img:{url}, name})=>{
        return(
          <div className="card" key={_id}>
            <div className="container_item">
              <button className="bag"></button>
              <img className="img_product" src={url} width="100%" ></img>
            </div>
            <div className="separator_card"></div>
            <p className="category">{category}</p>
            <p className="title">{name}</p>
            <div className="hover">
              <button className="bag white"></button>

              <div className="container_of_conteiner">
                <div className="container_price">
                  <p className="price">{cost}</p>
                  <img src ="../../assets/icons/coin.svg" alt="coins" width="33px" height="33px" className="coin_product"></img>
                </div>
              </div>

              <button className="redeem_now">Redeem now</button>
            </div>
          </div>
        )
      }
      )}
    </div>
  )
}
