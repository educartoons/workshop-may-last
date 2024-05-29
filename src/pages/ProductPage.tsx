import { useEffect } from 'react'
import ProductView from '../components/ProductView'
import Wrapper from '../components/Wrapper'

export default function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper>
      <ProductView />
    </Wrapper>
  )
}
