import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {context, AppContentPorvider} from './context/AppContent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContentPorvider>
      <App />
    </AppContentPorvider>
  </React.StrictMode>,
)
