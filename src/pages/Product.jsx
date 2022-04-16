import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../Components/Header'

export const Product = () => {
  let params = useParams()
  console.log(params, 'hola')
  return (
    <>
      <Header />
      <h1>Invoice {params.invoiceId}</h1>;
    </>
  )
}
