import React, { useState } from 'react'
import { requestPoints } from '../logic/fetchPoints'
import { resultGetUsers } from '../logic/fetchUsers'
import '../styles/1.header.css'

export const Header = () => {

  const {name, points} = resultGetUsers

  const [totalPoints, setTotalPoints] = useState(points)  
  
  const handlerAddPoints = async () => {
    let response = await requestPoints()
    // console.log(response)
    const data = await response.json()
    // console.log(data)
    const newPoints = data['New Points']
    // console.log(newPoints)
    setTotalPoints(newPoints)
  }

  return (
    <header>
      <img src = "../../assets/aerolab-logo.svg" alt="logo of the page" width="39px" height="36px" className="logo"></img>
      <div className="container_user_and_coins">
        <p className="user">{name}</p>
        <div className="container_coins">
          <p className="number-of-coins">{totalPoints}</p>
          <img src ="../../assets/icons/coin.svg" alt="coins" width="24px" height="24px" className="coin"></img>
        </div>
        <button className="add_points" onClick={handlerAddPoints}></button>
      </div>
    </header>
  )
}
