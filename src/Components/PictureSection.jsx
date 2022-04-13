import React from 'react'
import '../../styles/2.picturesection.css'

export const PictureSection = () => {
  return (
    <>
      <picture>
        <source srcSet="/header-x1.png" media="(max-width: 600px)"></source>
        <img
          src="/header-x2.png"
          alt="Picture electronic products"
          width="100%"
          height="412px"
          className="img_section"
        ></img>
        <p className="section-title">Electronics</p>
      </picture>
      <div className="separator"></div>
    </>
  )
}
