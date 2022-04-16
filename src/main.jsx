import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalContextProvider from '../context/globalContextProvider'

import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
