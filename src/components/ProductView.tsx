import ProductDetails from './ProductDetails'
import ProductGallery from './ProductGallery'

export default function ProductView() {
  return (
    <div className="flex flex-col-reverse md:flex-row mb-10">
      <div className="flex-grow">
        <ProductGallery />
      </div>
      <div className="min-w-[300px] lg:min-w-[456px]">
        <ProductDetails />
      </div>
    </div>
  )
}
