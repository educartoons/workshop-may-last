import ProductList from '../components/ProductList'
import Store from '../components/Store'
import Wrapper from '../components/Wrapper'

export default function ProductsPage() {
  return (
    <Store>
      <Wrapper>
        <ProductList />
      </Wrapper>
    </Store>
  )
}
