import logo from '../assets/images/logo.png'
const Group = ({ title, links }) => <div className="col-6 col-md-4 col-lg-2"><h3>{title}</h3><ul className="list-unstyled footer-links">{links.map((x) => <li key={x}><a href={`#${x.toLowerCase().replaceAll(' ', '-')}`}>{x}</a></li>)}</ul></div>
function SiteFooter() {
  return <footer className="footer py-5"><div className="container py-lg-4"><div className="row g-5"><div className="col-lg-6"><img className="footer-logo mb-4" src={logo} alt="Christ Infotech" /><address className="text-body-secondary mb-0">CHRIST (Deemed to be University) Christ University Road, 30 Valor Court At Post: Dasve Lavasa, Taluka: Mulshi Pune 412112, Maharashtra.</address></div><Group title="Quick Links" links={['About Us', 'Services', 'Core Team', 'Career']} /><Group title="Main Pages" links={['Portfolio', 'Products', 'Contact Us']} /><div className="col-6 col-md-4 col-lg-2"><h3>Follow us</h3><ul className="list-unstyled footer-links"><li><a href="#twitter">𝕏&nbsp; Twitter</a></li><li><a href="#linkedin">in&nbsp; Linkedin</a></li><li><a href="#facebook">ⓕ&nbsp; Facebook</a></li></ul></div></div></div></footer>
}
export default SiteFooter
