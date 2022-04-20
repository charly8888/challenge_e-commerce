import React, { useEffect, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { globalContext } from '../context/globalContextProvider'
import { resultGetProducts } from './helpers/apis/gets'
import { History } from './pages/History'
import { Homepage } from './pages/Homepage'
import { Product } from './pages/Product'
import { ShoppingCart } from './pages/ShoppingCart'

const App = () => {
  const { setProducts } = useContext(globalContext)

  useEffect(async () => {
    setProducts(
      await resultGetProducts(
        'https://coding-challenge-api.aerolab.co/products'
      )
    )
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="history" element={<History />} />
      <Route path="cart" element={<ShoppingCart />} />
      <Route path="product/:invoiceId" element={<Product />} />
      <Route
        path="*"
        element={<h1> no se encuentra la ruta especificada</h1>}
      />
    </Routes>
  )
}

export default App
