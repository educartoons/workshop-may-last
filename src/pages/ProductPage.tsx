import { useEffect } from 'react'
import ProductView from '../components/ProductView'
import Wrapper from '../components/Wrapper'
import Store from '../components/Store'

export default function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Store>
      <Wrapper>
        <ProductView />
      </Wrapper>
    </Store>
  )
}
