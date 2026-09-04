import SiteNavbar from '../components/SiteNavbar.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import { Newsletter } from '../components/home/HomeSections.jsx'
import CareerHero from '../components/career/CareerHero.jsx'
import { OpenPositions, VisionMission, WhyJoin } from '../components/career/CareerSections.jsx'

function Career() {
  return <><SiteNavbar /><main><CareerHero /><WhyJoin /><VisionMission /><OpenPositions /><Newsletter /></main><SiteFooter /></>
}
export default Career
