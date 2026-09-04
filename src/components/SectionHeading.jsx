function SectionHeading({ eyebrow, title, align = 'center' }) {
  return <div className={`section-heading text-${align}`}><span className="section-pill">{eyebrow}</span><h2>{title}</h2></div>
}
export default SectionHeading
