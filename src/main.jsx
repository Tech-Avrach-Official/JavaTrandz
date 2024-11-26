import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StoreProvider } from './Redux/provider/Provider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
    <Toaster 
      position="bottom-right"
      reverseOrder={false}
    />
    <App />
    </StoreProvider>
  </React.StrictMode>,
)
