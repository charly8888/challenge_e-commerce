import React, { useState, useEffect } from 'react'
import { resultGetUsers } from '../helpers/apis/gets'
import '../../styles/1.header.css'
import { useContext } from 'react'
import { globalContext } from '../../context/globalContextProvider'
import { Link, useNavigate } from 'react-router-dom'

export const Header = ({ home = true }) => {
  const navigate = useNavigate()
  const [options, setOptions] = useState(false)

  const {
    totalPoints,
    name,
    setAdd1000,
    setAdd5000,
    setAdd7500,
    setUser,
    cart,
    setPoints,
    addToCart,
  } = useContext(globalContext)

  useEffect(async () => {
    const { name, points } = await resultGetUsers(
      'https://coding-challenge-api.aerolab.co/user/me'
    )
    setUser(name)
    setPoints(points)
    addToCart()
  }, [])

  return (
    <header>
      <img
        onClick={() => {
          navigate('/')
        }}
        src="/aerolab-logo.svg"
        alt="page logo"
        width="39px"
        height="36px"
        className="logo"
      />
      {home && (
        <Link to={'/history'} className="history">
          History
        </Link>
      )}
      <Link className="cart" to={'/cart'}>
        <h6>{cart.length}</h6>
      </Link>
      <div className="container_user_and_coins">
        <p className="user">{name}</p>
        <div className="container_coins">
          <p className="number-of-coins">{totalPoints}</p>
          <img
            src="/icons/coin.svg"
            width="24px"
            height="24px"
            className="coin"
            alt="coin icon"
          />
        </div>
        <button
          className="add_points"
          onClick={() => setOptions(!options)}
        ></button>
        {options && (
          <div className="container_buttons_header">
            <button onClick={setAdd1000}>1000</button>
            <button onClick={setAdd5000}>5000</button>
            <button onClick={setAdd7500}>7500</button>
          </div>
        )}
      </div>
    </header>
  )
}
