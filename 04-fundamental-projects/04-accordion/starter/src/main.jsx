import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QuestionContextProvider } from './context/QuestionContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuestionContextProvider>
      <App />
    </QuestionContextProvider>
  </React.StrictMode>,
)
