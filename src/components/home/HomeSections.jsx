import { useRef, useState } from 'react'
import SectionHeading from '../SectionHeading.jsx'
import InfiniteMarquee from '../InfiniteMarquee.jsx'
import aboutVideo from '../../assets/images/christinfotech imgs/Index/About Us video.mp4'
import whyChooseUsImage from '../../assets/images/christinfotech imgs/about/Why Choose Us.jpeg'
import { blogs, collaborations, faqs, features, processSteps, services, testimonials } from '../../data/homeData.js'

export function Hero() {
  return <section id="home" className="hero"><div className="container h-100 d-flex align-items-center"><div className="hero-copy text-white"><div className="hero-tag"><span>★</span> Custom Software • AI • IoT Solutions</div><h1>Smart Digital Solutions<br />for Your Business</h1><p>We help businesses build reliable web, mobile, AI, and IoT solutions that solve real problems and support long-term growth.</p><a className="btn btn-primary hero-btn" href="#contact">Book A Free Call Now <span>↗</span></a></div></div></section>
}

export function Collaborations() {
  const cards = collaborations.map((name) => <div className="logo-card" key={name}>{name}</div>)
  return <section className="collaborations py-5"><p className="text-center mb-4">Our collaborations and initiatives</p><InfiniteMarquee label="Our collaborators">{cards}</InfiniteMarquee></section>
}

export function About() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) { video.play(); setPlaying(true) } else { video.pause(); setPlaying(false) }
  }
  return <section id="about" className="section-space bg-soft"><div className="container"><div className="row align-items-center g-5"><div className="col-lg-6"><SectionHeading eyebrow="About Us" title="Your Technology Partner for Digital Growth" align="start" /><p className="section-copy">Christ Infotech helps businesses turn ideas into practical digital solutions that improve efficiency, reduce operational challenges, and support long-term growth. We design and build reliable software, mobile applications, AI systems, and IoT solutions that help organizations work smarter and serve their customers better.</p><p className="section-copy">Our approach is simple — we listen, we plan carefully, and we build solutions that are secure, scalable, and easy to manage.</p><a className="btn btn-outline-primary rounded-3 px-3 py-2" href="#footer">More About Us</a></div><div className="col-lg-5 offset-lg-1"><div className="video-placeholder"><video ref={videoRef} src={aboutVideo} playsInline controls={playing} onClick={togglePlay} onEnded={() => setPlaying(false)} />{!playing && <button type="button" className="play-button" aria-label="Play company video" onClick={togglePlay}>▶</button>}</div></div></div></div></section>
}

export function Services() {
  return <section id="services" className="section-space"><div className="container"><SectionHeading eyebrow="Services" title="How We Support Your Business" /><div className="row g-4 service-grid">{services.map((s) => <div className="col-md-6 col-lg-4" key={s.title}><article className="service-card h-100"><img src={s.image} alt="" /><h3>{s.title}</h3><p>{s.description}</p></article></div>)}</div></div></section>
}

export function WhyChooseUs() {
  return <section className="section-space bg-soft"><div className="container"><SectionHeading eyebrow="Why Choose Us" title={<>A Structured Approach to<br className="d-none d-md-block" /> Digital Development</>} /><div className="row align-items-center g-5"><div className="col-lg-7"><div className="row g-5">{features.map((f) => <div className="col-sm-6 feature" key={f.title}><span className="feature-icon">{f.icon}</span><h3>{f.title}</h3><p>{f.text}</p></div>)}</div></div><div className="col-lg-5"><img className="rounded-media" src={whyChooseUsImage} alt="Why choose Christ Infotech" /></div></div></div></section>
}

export function Process() {
  const [active, setActive] = useState(0); const item = processSteps[active]
  return <section className="section-space"><div className="container"><SectionHeading eyebrow="Process" title={<>Achieving success in three<br className="d-none d-md-block" /> simple steps</>} /><div className="process-tabs d-flex flex-column flex-lg-row justify-content-center" role="tablist">{processSteps.map((step, i) => <button className={i === active ? 'active' : ''} type="button" role="tab" aria-selected={i === active} onClick={() => setActive(i)} key={step.title}><span>{step.icon}</span>{step.label}</button>)}</div><div className="row align-items-center g-5 process-content" key={item.title}><div className="col-lg-6"><img className="rounded-media" src={item.image} alt={item.title} /></div><div className="col-lg-5 offset-lg-1"><h3>{item.title}</h3><p>{item.text}</p></div></div></div></section>
}

export function Testimonials() {
  const cards = testimonials.map((t) => <article className="testimonial-card" key={t.name}><div className="stars">★★★★★</div><p>“{t.quote}”</p><div className="d-flex align-items-center gap-3 mt-auto"><span className="avatar">{t.initials}</span><div><h3>{t.name}</h3><small>{t.role}</small></div></div></article>)
  return <section className="section-space bg-soft"><SectionHeading eyebrow="Testimonials" title={<>Success stories from our<br className="d-none d-md-block" /> valued clients</>} /><InfiniteMarquee label="Client testimonials" className="testimonials-marquee">{cards}</InfiniteMarquee></section>
}

export function Blogs() {
  return <section className="section-space"><div className="container"><SectionHeading eyebrow="Blogs" title="Latest Insights & Updates" /><div className="row g-4">{blogs.map((b) => <div className="col-md-6 col-lg-4" key={b.title}><article className="blog-card h-100"><img src={b.image} alt="" /><div className="d-flex align-items-center gap-2 my-3"><span className="badge rounded-pill text-bg-primary">Article</span><small className="text-primary">{b.date}</small></div><h3>{b.title}</h3><a href="#blog">Read more <span>→</span></a></article></div>)}</div></div></section>
}

export function Faq() {
  return <section className="section-space bg-soft"><div className="container"><SectionHeading eyebrow="FAQ's" title={<>Addressing your most common<br className="d-none d-md-block" /> questions</>} /><div className="accordion accordion-flush faq mx-auto" id="faqAccordion">{faqs.map(([q, a], i) => <div className="accordion-item" key={q}><h3 className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${i}`} aria-expanded="false" aria-controls={`faq${i}`}>{q}</button></h3><div id={`faq${i}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div className="accordion-body">{a}</div></div></div>)}</div></div></section>
}

export function ContactBlocks() {
  return <><ProjectCta /><Newsletter /></>
}

export function ProjectCta() {
  return <section id="contact" className="cta-wrap"><div className="container"><div className="cta text-center text-white"><span className="cta-icon">▱</span><h2>Ready to Start Your<br />Project?</h2><a className="btn btn-light text-primary rounded-3 px-4 py-2" href="/contact">Contact Us</a></div></div></section>
}

export function Newsletter() {
  return <section className="newsletter"><div className="container"><div className="row align-items-center g-4"><div className="col-lg-6"><h2>Subscribe for exclusive<br />content &amp; news</h2></div><div className="col-lg-5 offset-lg-1"><form className="subscribe-form d-flex" onSubmit={(e) => e.preventDefault()}><label className="visually-hidden" htmlFor="newsletter-email">Company email</label><input id="newsletter-email" className="form-control border-0" type="email" placeholder="name@email.com" required /><button className="btn btn-dark" type="submit">Subscribe</button></form><p className="mt-3 mb-0">Enter your company email...</p></div></div></div></section>
}
