import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

document.title = 'Bank Modern React App';
const link = document.querySelector("link[rel~='icon']");
if (link) {
  link.href = '/favicon.png';
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
