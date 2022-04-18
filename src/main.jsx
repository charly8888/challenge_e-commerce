import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalContextProvider from '../context/globalContextProvider'
import HistoryContextProvider from '../context/historyContextProvider'

import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <HistoryContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HistoryContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
