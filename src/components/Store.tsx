import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Header from './Header'
import MobileNavigation from './MobileNavigation'
import Footer from './Footer'
import { supabase } from '../db/db'
import { setUser } from '../store/userSlice'

type StoreProps = {
  children: React.ReactNode
}

export default function Store({ children }: StoreProps) {
  const [openMenu, setOpenMenu] = useState(false)
  const dispatch = useDispatch()

  const handleOpenMenu = () => {
    setOpenMenu(true)
  }

  const handleClose = () => {
    setOpenMenu(false)
  }
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        dispatch(
          setUser({
            email: session.user.email!,
            isAuthenticated: true,
          })
        )
      }
    })
  }, [])

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
