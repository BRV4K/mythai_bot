import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '/public/fonts/Elizabeta Modern/Elizabeta Modern.ttf';
import '/public/fonts/Soyuz Grotesk/SoyuzGroteskBold.ttf';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
