import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home.jsx'
// import Hero from './component/Hero.jsx'
// import About from './component/About.jsx'
// import Services from './component/Services.jsx'
// import Staff from './component/staff.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
