import Product, { ProductProps } from './Product'

type ProductsProps = {
  list: ProductProps[]
}

function Products(props: ProductsProps) {
  const list = props.list
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {list.map((item, index) => (
          <Product key={index} name={item.name} url={item.url} />
        ))}
      </div>
    </div>
  )
}

export default Products
