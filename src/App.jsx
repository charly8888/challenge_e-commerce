import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { History } from './pages/History'
import { Homepage } from './pages/Homepage'
import { Product } from './pages/Product'
import { ShoppingCart } from './pages/ShoppingCart'

const App = () => {
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
