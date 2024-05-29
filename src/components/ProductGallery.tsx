import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { PRODUCT_IMAGES } from '../utils/constants'

export default function ProductGallery() {
  const [index, setIndex] = useState(0)

  const handleHover = (idx: number) => {
    setIndex(idx)
  }

  const handlePrev = () => {
    if (index - 1 < 0) {
      setIndex(PRODUCT_IMAGES.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const handleNext = () => {
    if (index + 1 > PRODUCT_IMAGES.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const getClasses = (idx: number) => {
    if (idx === index) {
      return 'bg-zinc-300 mb-2 rounded'
    } else {
      return 'bg-zinc-100 mb-2 rounded'
    }
  }

  return (
    <div>
      <div className="flex justify-between gap-4 px-2 sm:px-10 md:px-20">
        <div className="min-w-[60px] hidden md:block">
          {PRODUCT_IMAGES.map((product, idx) => (
            <div
              onMouseEnter={() => handleHover(idx)}
              className={getClasses(idx)}
            >
              <img className="w-[60px]" src={product.thumbnail} alt="" />
            </div>
          ))}
        </div>
        <div className="relative">
          <figure className="">
            <img className="" src={PRODUCT_IMAGES[index].fullsize} alt="" />
          </figure>
          <div className="absolute bottom-3 right-3 z-10">
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="bg-white rounded-full p-2"
              >
                <ChevronLeftIcon className="w-5" />
              </button>
              <button
                onClick={handleNext}
                className="bg-white rounded-full p-2"
              >
                <ChevronRightIcon className="w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
