import React from 'react'
import '../styles/picturesection.css'

export const PictureSection = () => {
  return ( 
    <>
      <picture>
        <source srcSet="../../assets/header-x1.png" media="(max-width: 600px)"></source>
        <img src="../../assets/header-x2.png" alt="Picture electronic products" width="100%" height="412px"></img>
        <p className="section-title">Electronics</p>
      </picture>
      <div className="separator"></div>
      <div className="se"></div>
    </>
    
  )
}
