import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AraContextProvider from './Context/AraContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AraContextProvider>
    <App />
  </AraContextProvider>
  </BrowserRouter>
)
