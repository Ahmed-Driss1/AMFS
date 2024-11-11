import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <About />
  </StrictMode>,
)
