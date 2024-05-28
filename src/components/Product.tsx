import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartFilled } from '@heroicons/react/24/solid'
import { useState } from 'react'

export type ProductProps = {
  name: string
  url: string
}

function Product(props: ProductProps) {
  const [like, setLike] = useState(false)

  const handleClick = () => {
    setLike(!like)
  }

  return (
    <div className="relative">
      <figure>
        <img className="w-full" src={props.url} alt={props.name} />
      </figure>
      <div className="absolute top-2 right-2 z-10">
        {like ? (
          <HeartFilled className="w-5 cursor-pointer" onClick={handleClick} />
        ) : (
          <HeartIcon className="w-5 cursor-pointer" onClick={handleClick} />
        )}
      </div>
    </div>
  )
}

export default Product
