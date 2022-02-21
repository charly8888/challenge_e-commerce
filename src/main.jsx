import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './Components/Header'
import { PictureSection } from './Components/PictureSection'
import { Selectors } from './Components/Selectors'
import './index.css'


ReactDOM.render(
  <>
    <Header />
    <PictureSection />
    <Selectors  />
    
  </>,
  document.getElementById('root')
)