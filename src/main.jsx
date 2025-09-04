import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.scss'
import App from './App.jsx'
import { CartProvider } from './CartContext.jsx'


createRoot(document.getElementById('app')).render(
  <StrictMode>
    <BrowserRouter>
    <CartProvider>
      <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
