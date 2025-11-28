import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { BrowerRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowerRouter>
    <StrictMode>
      <App />
      <Toaster
        postion="bottom-right"
        toastOptions={{
          style: {
            background: '#000000',
            color: "#ffffff",

          },
        }}
      />
    </StrictMode>,
  </BrowerRouter>
)
