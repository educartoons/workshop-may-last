import ProductDetails from './ProductDetails'
import ProductGallery from './ProductGallery'

export default function ProductView() {
  return (
    <div className="flex mb-10">
      <div className="flex-grow">
        <ProductGallery />
      </div>
      <div className="min-w-[456px]">
        <ProductDetails />
      </div>
    </div>
  )
}
