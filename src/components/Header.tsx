import { Link } from 'react-router-dom'
import { HeartIcon } from '@heroicons/react/24/outline'
import PreHeader from './PreHeader'
import { IconCart, IconMenu, IconSearch, IconUser } from '../utils/icons'

type HeaderProps = {
  handleOpenMenu: () => void
}

function Header({ handleOpenMenu }: HeaderProps) {
  return (
    <div>
      <PreHeader />
      <header className="px-4">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <svg
                aria-hidden="true"
                className="w-20"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="hidden md:block">
            <nav>
              <ul className="flex gap-4">
                <li>New & Featured</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Jordan</li>
                <li>Sale</li>
              </ul>
            </nav>
          </div>
          <div className="block md:hidden">
            <nav>
              <ul className="flex gap-4">
                <li>
                  <Link
                    to="/"
                    className="hover:bg-gray-200 rounded-full px-1 py-1 inline-block"
                  >
                    <IconSearch width={25} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:bg-gray-200 rounded-full px-1 py-1 inline-block"
                  >
                    <IconUser width={25} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:bg-gray-200 rounded-full px-1 py-1 inline-block"
                  >
                    <IconCart width={25} />
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleOpenMenu}
                    className="hover:bg-gray-200 rounded-full px-1 py-1"
                  >
                    <IconMenu width={25} />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden md:block">
            <HeartIcon className="w-5" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
