import { useState } from 'react'
import SectionHeading from '../SectionHeading.jsx'
import whoWeAreImage from '../../assets/images/christinfotech imgs/about/Who we are.avif'
import { deliverySteps, teamMembers, values } from '../../data/aboutData.js'

export function AboutHero() {
  return <section className="about-hero"><div className="container h-100 d-flex justify-content-center align-items-center text-center"><div className="about-hero-copy text-white"><span className="section-pill border-secondary">About us</span><h1>A Trusted Partner for<br className="d-none d-md-block" /> Reliable Digital Solutions</h1><a className="btn btn-primary hero-btn" href="#contact">Book A Free Call Now <span>↗</span></a></div></div></section>
}

export function WhoWeAre() {
  return <section className="section-space"><div className="container"><SectionHeading eyebrow="Who we are" title={<>Turning Business Ideas into<br className="d-none d-md-block" /> Practical Technology</>} /><div className="row align-items-center g-5"><div className="col-lg-5"><div className="who-copy"><p>Christ Infotech is a technology and innovation centre focused on building practical software solutions for businesses and institutions. We work with organizations to develop applications, intelligent systems, and data-driven platforms that improve efficiency and support digital growth.</p><p>Alongside industry projects, the centre also contributes to the technology needs of CHRIST (Deemed to be University) while providing opportunities for students and faculty to engage in real-world software development, research, and emerging technologies such as Artificial Intelligence and Data Analytics.</p><p>Through this collaborative environment, Christ Infotech connects industry requirements, academic expertise, and innovation to deliver meaningful technology solutions.</p></div></div><div className="col-lg-5 offset-lg-1"><img className="rounded-media who-image" src={whoWeAreImage} alt="Who Christ Infotech is" /></div></div></div></section>
}

export function Values() {
  return <section className="section-space bg-soft"><div className="container"><SectionHeading eyebrow="Values" title={<>Building success with values<br className="d-none d-md-block" /> that matter</>} /><div className="row g-4">{values.map((value) => <div className="col-md-6 col-lg-4" key={value.title}><article className="card value-card h-100 border-0"><div className="card-body"><span className="feature-icon">{value.icon}</span><h3>{value.title}</h3><p>{value.text}</p></div></article></div>)}</div></div></section>
}

export function Delivery() {
  const [active, setActive] = useState(0)
  const change = (direction) => setActive((active + direction + deliverySteps.length) % deliverySteps.length)
  return <section className="section-space"><div className="container"><SectionHeading eyebrow="How we works" title="How We Deliver Solutions" /><div className="row align-items-center g-5"><div className="col-lg-5"><div className="delivery-steps">{deliverySteps.map((step, index) => <button type="button" onClick={() => setActive(index)} className={`delivery-step ${active === index ? 'active' : ''}`} key={step.number}><span className="step-number">{step.number}</span><span><strong>{step.title}</strong><small>{step.text}</small></span></button>)}</div></div><div className="col-lg-6 offset-lg-1"><div className="delivery-media" key={active}><img src={deliverySteps[active].image} alt={`${deliverySteps[active].title} step illustration`} /><button className="carousel-arrow prev" type="button" onClick={() => change(-1)} aria-label="Previous step">←</button><button className="carousel-arrow next" type="button" onClick={() => change(1)} aria-label="Next step">→</button><div className="delivery-dots">{deliverySteps.map((step, index) => <button type="button" className={active === index ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Show ${step.title}`} key={step.number} />)}</div></div></div></div></div></section>
}

export function Team() {
  return <section id="team" className="section-space bg-soft"><div className="container"><SectionHeading eyebrow="Team" title={<>A team built on expertise and<br className="d-none d-md-block" /> collaboration</>} /><div className="row g-4">{teamMembers.map((member) => <div className="col-sm-6 col-lg-4" key={member.name}><article className="team-card"><img src={member.image} alt={member.name} /><div className="team-info"><h3>{member.name}</h3><p>{member.role}</p></div></article></div>)}</div></div></section>
}
