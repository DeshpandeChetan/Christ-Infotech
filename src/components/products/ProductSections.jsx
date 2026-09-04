import SectionHeading from '../SectionHeading.jsx'
import { products } from '../../data/productData.js'

export function ProductHero() {
  return <section className="inner-page-hero"><div className="container"><SectionHeading eyebrow="Our Products" title={<>Products Built for<br className="d-none d-md-block" /> Real-World Impact</>} /></div></section>
}

export function ProductList() {
  return <section className="product-list"><div className="container">{products.map((product, index) => { const imageFirst = index % 2 === 0; return <article className="product-item" key={product.title}><div className="row align-items-center g-5"><div className={`col-lg-6 ${imageFirst ? '' : 'order-lg-2'}`}><img className="product-image" src={product.image} alt={`${product.title} product interface`} /></div><div className={`col-lg-5 ${imageFirst ? 'offset-lg-1' : 'order-lg-1'}`}><p className="product-category">{product.category}</p><h2>{product.title}</h2><p className="product-description">{product.description}</p><ul className="product-features list-unstyled">{product.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul><a className="btn btn-primary rounded-3 px-4 py-3" href="/contact">Contact for demo</a></div></div></article> })}</div></section>
}
