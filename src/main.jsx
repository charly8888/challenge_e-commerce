import React from 'react'
import ReactDOM from 'react-dom'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { PictureSection } from './Components/PictureSection'
import { Products } from './Components/Products'
import { Selectors } from './Components/Selectors'
import './index.css'


ReactDOM.render(
  <>
    <Header />
    <PictureSection />
    <Selectors />
    <Products />
    <Footer />
  </>,
  document.getElementById('root')
)