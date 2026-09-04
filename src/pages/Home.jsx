import SiteNavbar from '../components/SiteNavbar.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import { About, Blogs, Collaborations, ContactBlocks, Faq, Hero, Process, Services, Testimonials, WhyChooseUs } from '../components/home/HomeSections.jsx'

function Home() {
  return <><SiteNavbar /><main><Hero /><Collaborations /><About /><Services /><WhyChooseUs /><Process /><Testimonials /><Blogs /><Faq /><ContactBlocks /></main><SiteFooter /></>
}
export default Home
