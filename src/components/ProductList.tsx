import ProductPreview from './ProductPreview'

export default function ProductList() {
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
}
