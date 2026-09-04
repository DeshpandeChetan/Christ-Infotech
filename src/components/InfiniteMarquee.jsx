function InfiniteMarquee({ children, label, className = '' }) {
  return <div className={`marquee ${className}`} aria-label={label}><div className="marquee-track"><div className="marquee-set">{children}</div><div className="marquee-set" aria-hidden="true">{children}</div></div></div>
}
export default InfiniteMarquee
