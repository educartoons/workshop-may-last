import { Link } from 'react-router-dom'
import { HeartIcon } from '@heroicons/react/24/outline'
import PreHeader from './PreHeader'
import { IconNike } from '../utils/icons'
import MobileMenu from './MobileMenu'
import MainMenu from './MainMenu'

type HeaderProps = {
  handleOpenMenu: () => void
}

function Header({ handleOpenMenu }: HeaderProps) {
  return (
    <div className="relative">
      <PreHeader />
      <header className="px-4">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <IconNike width={70} />
            </Link>
          </div>
          <div className="hidden md:block">
            <MainMenu />
          </div>
          <MobileMenu handleOpenMenu={handleOpenMenu} />
          <div className="hidden md:block">
            <HeartIcon className="w-5" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
