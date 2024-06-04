import { useState } from 'react'
import Header from './Header'
import MobileNavigation from './MobileNavigation'
import Footer from './Footer'

type StoreProps = {
  children: React.ReactNode
}

export default function Store({ children }: StoreProps) {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(true)
  }

  const handleClose = () => {
    setOpenMenu(false)
  }
  return (
    <div
      className={`relative ${openMenu ? 'max-h-screen overflow-hidden' : ''}`}
    >
      <Header handleOpenMenu={handleOpenMenu} />
      {children}
      <Footer />
      <MobileNavigation openMenu={openMenu} handleClose={handleClose} />
    </div>
  )
}
