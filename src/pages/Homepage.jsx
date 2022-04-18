import React from 'react'
import { globalContext } from '../../context/globalContextProvider'
import { historyContext } from '../../context/historyContextProvider'
import {
  Footer,
  Header,
  PictureSection,
  Products,
  Selectors,
} from '/src/Components'

export const Homepage = () => {
  return (
    <>
      <Header />
      <PictureSection />
      <Selectors context={globalContext} />
      <Products />
      <Footer context={globalContext} />
    </>
  )
}
