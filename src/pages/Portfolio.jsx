import SiteNavbar from '../components/SiteNavbar.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import { ContactBlocks } from '../components/home/HomeSections.jsx'
import { PortfolioHero, PortfolioWorks } from '../components/portfolio/PortfolioSections.jsx'

function Portfolio() {
  return <><SiteNavbar /><main><PortfolioHero /><PortfolioWorks /><ContactBlocks /></main><SiteFooter /></>
}
export default Portfolio
