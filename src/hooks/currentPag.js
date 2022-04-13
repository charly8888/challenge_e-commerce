import { useState } from 'react'
import { resultGetProducts } from '../../helpers/apis/gets'

export const useCurrentPag = async () => {
  let productos = await resultGetProducts(
    'https://coding-challenge-api.aerolab.co/products'
  )
  const [pag, setpag] = useState(0)
  const increment = () => {
    if (pag < productos.length - 1) {
      setpag((p) => p + 1)
    }
  }
  const decrement = () => {
    if (pag > 0) {
      setpag((p) => p - 1)
    }
  }
  return { pag, increment, decrement }
}
