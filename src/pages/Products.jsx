import SiteNavbar from '../components/SiteNavbar.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import { ContactBlocks } from '../components/home/HomeSections.jsx'
import { ProductHero, ProductList } from '../components/products/ProductSections.jsx'

function Products() {
  return <><SiteNavbar /><main><ProductHero /><ProductList /><ContactBlocks /></main><SiteFooter /></>
}
export default Products
