import { Link } from 'react-router-dom'
import { IconChevronRight, IconCross } from '../utils/icons'
import useClickOutside from '../hooks/useClickOutside'

type MobileNavigationProps = {
  openMenu: boolean
  handleClose: () => void
}

export default function MobileNavigation({
  openMenu,
  handleClose,
}: MobileNavigationProps) {
  const ref = useClickOutside<HTMLDivElement>(handleClose)
  return (
    <div className="block md:hidden">
      <div
        ref={ref}
        className={`px-7 py-7 absolute right-0 top-0 h-screen bg-white z-20 w-[300px] duration-500 transition-transform ${
          openMenu ? 'translate-x-[0]' : 'translate-x-[300px]'
        }`}
      >
        <div className="flex justify-end mb-10">
          <button
            onClick={handleClose}
            className="hover:bg-gray-200 rounded-full px-1 py-1"
          >
            <IconCross width={24} />
          </button>
        </div>
        <div>
          <nav>
            <ul>
              <li className="mb-2">
                <Link to="/" className="flex justify-between items-center">
                  <span className="text-2xl font-normal">New & Featured</span>{' '}
                  <IconChevronRight width={24} />
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="flex justify-between items-center">
                  <span className="text-2xl font-normal">Men</span>{' '}
                  <IconChevronRight width={24} />
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="flex justify-between items-center">
                  <span className="text-2xl font-normal">Women</span>{' '}
                  <IconChevronRight width={24} />
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="flex justify-between items-center">
                  <span className="text-2xl font-normal">Kids</span>{' '}
                  <IconChevronRight width={24} />
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="flex justify-between items-center">
                  <span className="text-2xl font-normal">Jordan</span>{' '}
                  <IconChevronRight width={24} />
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="flex justify-between items-center">
                  <span className="text-2xl font-normal">Sale</span>{' '}
                  <IconChevronRight width={24} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {openMenu ? (
        <div className="bg-black fixed inset-0 z-10 opacity-20"></div>
      ) : null}
    </div>
  )
}
