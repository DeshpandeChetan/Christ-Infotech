import SectionHeading from '../SectionHeading.jsx'
import { portfolioWorks } from '../../data/portfolioData.js'

export function PortfolioHero() {
  return <section className="portfolio-hero"><div className="container"><SectionHeading eyebrow="Our Works" title={<>Technology Solutions<br className="d-none d-md-block" /> We’ve Built</>} /></div></section>
}

export function PortfolioWorks() {
  return <section className="portfolio-works"><div className="container">{portfolioWorks.map((project, index) => { const imageFirst = index % 2 === 0; return <article className="portfolio-project" key={project.title}><div className="row align-items-center g-5"><div className={`col-lg-6 ${imageFirst ? '' : 'order-lg-2'}`}><img className="portfolio-image" src={project.image} alt={`${project.title} project screenshot`} /></div><div className={`col-lg-5 ${imageFirst ? 'offset-lg-1' : 'order-lg-1'}`}><p className="portfolio-category">{project.category}</p><h2>{project.title}</h2><p className="portfolio-description">{project.description}</p></div></div></article> })}</div></section>
}
