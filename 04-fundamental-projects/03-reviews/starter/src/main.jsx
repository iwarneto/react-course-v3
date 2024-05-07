import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ReviewsContextProvider from './context/ReviewContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReviewsContextProvider>
      <App />
    </ReviewsContextProvider>
  </React.StrictMode>,
)
