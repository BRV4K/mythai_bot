import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../public/fonts/Elizabeta Modern/Elizabeta Modern.ttf';
import '../public/fonts/Soyuz Grotesk/SoyuzGroteskBold.ttf';
import App from './App.jsx'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
