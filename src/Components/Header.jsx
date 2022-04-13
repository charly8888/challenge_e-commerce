import React, { useState, useEffect } from 'react'
import { requestPoints } from '../helpers/apis/posts'
import { resultGetUsers } from '../helpers/apis/gets'
import '../../styles/1.header.css'

export const Header = () => {
  const [options, setOptions] = useState(false)
  const [name, setName] = useState('')
  const [totalPoints, setTotalPoints] = useState(0)

  useEffect(async () => {
    const { name, points } = await resultGetUsers(
      'https://coding-challenge-api.aerolab.co/user/me'
    )
    setTotalPoints(points)
    setName(name)
  }, [])

  const handlerAddPoints = async (amount) => {
    let response = await requestPoints({ amount })
    const data = await response.json()
    const newPoints = data['New Points']
    setTotalPoints(newPoints)
  }

  return (
    <header>
      <img
        src="/aerolab-logo.svg"
        alt="page logo"
        width="39px"
        height="36px"
        className="logo"
      ></img>
      <div className="container_user_and_coins">
        <p className="user">{name}</p>
        <div className="container_coins">
          <p className="number-of-coins">{totalPoints}</p>
          <img
            src="/icons/coin.svg"
            alt="coins"
            width="24px"
            height="24px"
            className="coin"
          ></img>
        </div>
        <button
          className="add_points"
          onClick={() => setOptions(!options)}
        ></button>
        {options && (
          <div className="container_buttons">
            <button onClick={() => handlerAddPoints(1000)}>1000</button>
            <button onClick={() => handlerAddPoints(5000)}>5000</button>
            <button onClick={() => handlerAddPoints(7500)}>7500</button>
          </div>
        )}
      </div>
    </header>
  )
}
