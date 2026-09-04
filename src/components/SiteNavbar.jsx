import logo from '../assets/images/logo.png'
import { useState } from 'react'
const links = [
  ['About', '/about'], ['Services', '/#services'], ['Portfolio', '/portfolio'],
  ['Products', '/products'], ['Core Team', '/about#team'], ['Career', '/career'],
]
function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const close = () => setOpen(false)
  return <nav className="navbar navbar-expand-lg bg-white sticky-top site-navbar"><div className="container"><a className="navbar-brand" href="/"><img src={logo} alt="Christ Infotech" /></a><button className={`menu-toggle d-lg-none ${open ? 'is-open' : ''}`} type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mainNav" aria-label={open ? 'Close navigation' : 'Open navigation'}><span /><span /><span /></button><div className={`navbar-collapse mobile-menu ${open ? 'show' : ''}`} id="mainNav"><ul className="navbar-nav mx-auto align-items-center">{links.map(([label, href]) => { const active = href === path; return <li className="nav-item" key={label}><a className={`nav-link ${active ? 'active' : ''}`} href={href} onClick={close} aria-current={active ? 'page' : undefined}>{label}</a></li> })}</ul><a className={`btn btn-primary rounded-4 px-4 py-3 ${path === '/contact' ? 'active-page' : ''}`} href="/contact" onClick={close} aria-current={path === '/contact' ? 'page' : undefined}>Contact Us</a></div></div></nav>
}
export default SiteNavbar
