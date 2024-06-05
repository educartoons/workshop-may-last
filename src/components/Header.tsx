import { Link } from 'react-router-dom'
import { HeartIcon } from '@heroicons/react/24/outline'
import PreHeader from './PreHeader'
import {
  IconCart,
  IconMenu,
  IconNike,
  IconSearch,
  IconUser,
} from '../utils/icons'

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
              <IconNike width={70} />
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
                <li>
                  <Link to="users">Users</Link>
                </li>
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
