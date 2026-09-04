import SiteNavbar from '../components/SiteNavbar.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import { Collaborations, ContactBlocks, Testimonials, WhyChooseUs } from '../components/home/HomeSections.jsx'
import { AboutHero, Delivery, Team, Values, WhoWeAre } from '../components/about/AboutSections.jsx'

function About() {
  return <><SiteNavbar /><main><AboutHero /><Collaborations /><WhyChooseUs /><WhoWeAre /><Values /><Delivery /><Team /><Testimonials /><ContactBlocks /></main><SiteFooter /></>
}
export default About
