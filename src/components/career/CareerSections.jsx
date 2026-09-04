import { useState } from 'react'
import SectionHeading from '../SectionHeading.jsx'
import sceneImage from '../../assets/images/demo-scene.svg'
import analyticsImage from '../../assets/images/demo-analytics.svg'
import warmImage from '../../assets/images/demo-warm.svg'

const benefits = [
  { icon: '◉', title: 'Work on Real Projects', text: 'Contribute to real-world projects that solve practical problems for organizations.' },
  { icon: '↗', title: 'Learn New Technologies', text: 'Gain hands-on experience in software development, AI, and data analytics.' },
  { icon: '•••', title: 'Collaborative Environment', text: 'Work with a team that encourages learning, sharing ideas, and teamwork.' },
  { icon: '◇', title: 'Continuous Growth', text: 'Build your skills through practical experience, mentorship, and training programs.' },
]

const visionSlides = [sceneImage, analyticsImage, warmImage]

const openings = [
  { title: 'Frontend Developer', type: 'FULL TIME' },
  { title: 'UI/UX DESIGN LEAD', type: 'FULL TIME' },
  { title: 'Backend Developer', type: 'FULL TIME' },
]

const roleDescription = 'Key leadership role responsible for overseeing the creative vision and direction of a project, campaign, or brand. This role involves guiding a team of creative professionals and ensuring that all visual and conceptual work aligns with the strategic goals of the organization or client.'

export function WhyJoin() {
  return <section className="section-space career-benefits"><div className="container"><SectionHeading eyebrow="Why Work With Us" title="Why Join Christ Infotech?" /><div className="row align-items-center g-5"><div className="col-lg-5"><img className="career-team-image" src={sceneImage} alt="Demo team collaboration placeholder" /></div><div className="col-lg-6 offset-lg-1"><div className="row g-5">{benefits.map((benefit) => <div className="col-sm-6 career-benefit" key={benefit.title}><span className="feature-icon">{benefit.icon}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></div>)}</div></div></div></div></section>
}

export function VisionMission() {
  const [active, setActive] = useState(0)
  const move = (direction) => setActive((active + direction + visionSlides.length) % visionSlides.length)
  return <section className="section-space vision-mission"><div className="container"><h2 className="text-center">Our Vision &amp; Mission</h2><div className="row align-items-center g-5"><div className="col-lg-5"><div className="vision-copy"><h3>Vision</h3><p>Empower and encourage young minds to strive for excellence.</p><h3>Mission</h3><p>CHRIST-Infotech upskills young minds through creative ideas and practical experience to ensure their contribution to society in the area of software/ Analytics application development.</p></div></div><div className="col-lg-6 offset-lg-1"><div className="vision-carousel" key={active}><img src={visionSlides[active]} alt="Demo career environment placeholder" /><button type="button" className="carousel-arrow prev" onClick={() => move(-1)} aria-label="Previous image">←</button><button type="button" className="carousel-arrow next" onClick={() => move(1)} aria-label="Next image">→</button><div className="delivery-dots">{visionSlides.map((image, index) => <button type="button" className={active === index ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Show image ${index + 1}`} key={image} />)}</div></div></div></div></div></section>
}

export function OpenPositions() {
  return <section id="opportunities" className="section-space openings"><div className="container"><h2 className="text-center">Open Positions</h2><div className="opening-list">{openings.map((job) => <article className="opening" key={job.title}><div><span className="job-type">{job.type}</span><h3>{job.title}</h3><p>{roleDescription}</p></div><a className="btn btn-primary opening-button" href={`/contact?role=${encodeURIComponent(job.title)}`}>VIEW DETAILS <span>›</span></a></article>)}</div></div></section>
}
