import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Header from './Header'
import MobileNavigation from './MobileNavigation'
import Footer from './Footer'
import { supabase } from '../db/db'
import { resetUser, setUser } from '../store/userSlice'
import { getUserProfile } from '../api/user'
import { Session } from '@supabase/supabase-js'

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

  const handleSignIn = async (session: Session) => {
    const data = await getUserProfile(session.user.id)

    dispatch(
      setUser({
        email: session.user.email!,
        isAuthenticated: true,
        fullName: data.full_name!,
        createdAt: data.created_at,
      })
    )
  }

  useEffect(() => {
    const element = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        handleSignIn(session)
      } else if (event === 'SIGNED_OUT') {
        dispatch(resetUser())
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
