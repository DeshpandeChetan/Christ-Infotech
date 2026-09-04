import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Products from './pages/Products.jsx'
import Career from './pages/Career.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  if (path === '/about') return <About />
  if (path === '/portfolio') return <Portfolio />
  if (path === '/products') return <Products />
  if (path === '/career') return <Career />
  if (path === '/contact') return <Contact />
  return <Home />
}

export default App
