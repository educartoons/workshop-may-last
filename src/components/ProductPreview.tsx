import { Link } from 'react-router-dom'

export default function ProductPreview() {
  return (
    <div>
      <Link to="/product/nike-dunk-low">
        <figure>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4eae23a9-b240-4a53-98c7-d5502fe3f7dc/dunk-low-mens-shoes-l12Bc1.png"
            alt="Nike Dunk Low"
          />
        </figure>
        <div className="mt-3">
          <h3 className="text-base font-medium text-red-800">Just in</h3>
          <h2 className="text-base font-medium">Nike Dunk Low</h2>
          <p className="text-base text-gray-400 font-normal">Men's Shoes</p>
          <p className="text-base text-gray-400 font-normal">2 colors</p>
          <p className="text-base font-medium mt-3">$125</p>
        </div>
      </Link>
    </div>
  )
}
