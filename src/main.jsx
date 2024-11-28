import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home.jsx'
import Contact from './pages/contact.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Contact />
  
    
  </StrictMode>,
)
