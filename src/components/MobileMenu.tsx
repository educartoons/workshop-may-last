import { Link } from 'react-router-dom'
import { IconCart, IconMenu, IconSearch, IconUser } from '../utils/icons'

type MobileMenuProps = {
  handleOpenMenu: () => void
}

export default function MobileMenu({ handleOpenMenu }: MobileMenuProps) {
  return (
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
  )
}
