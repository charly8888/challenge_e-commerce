import React from 'react'
import '../styles/header.css'


export const Header = () => {
  return (
    <header>
      <img src = "../../assets/aerolab-logo.svg" alt="logo of the page" width="39px" height="36px" className="logo"></img>
      <div className="container_user_and_coins">
        <p className="user"> John Kite </p>
        <div className="container_coins">
          <p className="number-of-coins">5800000</p>
          <img src ="../../assets/icons/coin.svg" alt="coins" width="24px" height="24px" className="coin"></img>
        </div>
      </div>
    </header>
  )
}
