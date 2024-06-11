import { ChangeEvent, memo } from 'react'
import ProductPreview from './ProductPreview'

type ProductListProps = {
  handleChangeValue: (event: ChangeEvent<HTMLInputElement>) => void
}

const ProductList = memo(({ handleChangeValue }: ProductListProps) => {
  console.count('Rendering')

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
    </div>
  )
})

export default ProductList
