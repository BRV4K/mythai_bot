import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Provider } from 'react-redux'
import store from './redux/store'

if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
        document.body.style.height = window.visualViewport.height + 'px';
    });
}
// This will ensure user never overscroll the page
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) window.scrollTo(0, 0);
});

window.Telegram.WebApp.isVerticalSwipesEnabled = false;

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>,
)
