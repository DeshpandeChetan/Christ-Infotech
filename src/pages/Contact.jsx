import SiteNavbar from '../components/SiteNavbar.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import { Newsletter } from '../components/home/HomeSections.jsx'
import ContactSection from '../components/contact/ContactSection.jsx'

function Contact() {
  return <><SiteNavbar /><main><ContactSection /><Newsletter /></main><SiteFooter /></>
}
export default Contact
