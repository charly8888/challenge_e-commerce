import React from 'react'
import GlobalContextProvider from '../context/globalContextProvider'
import {
  Footer,
  Header,
  PictureSection,
  Products,
  Selectors,
} from './Components'

const App = () => {
  return (
    <GlobalContextProvider>
      <Header />
      <PictureSection />
      <Selectors />
      <Products />
      <Footer />
    </GlobalContextProvider>
  )
}

export default App
