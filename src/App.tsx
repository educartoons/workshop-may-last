import { useState } from 'react'
import Header from './components/Header'
import ProductPage from './pages/ProductPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import NotFoundPage from './pages/NotFoundPage'
import { UserContextProvider } from './context/user-context'
import UsersPage from './pages/UsersPage'
import HomePage from './pages/HomePage'
import MobileNavigation from './components/MobileNavigation'

export default function App() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(true)
  }

  const handleClose = () => {
    setOpenMenu(false)
  }

  return (
    <BrowserRouter>
      <UserContextProvider>
        <div
          className={`relative ${
            openMenu ? 'max-h-screen overflow-hidden' : ''
          }`}
        >
          <Header handleOpenMenu={handleOpenMenu} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <MobileNavigation openMenu={openMenu} handleClose={handleClose} />
        </div>
      </UserContextProvider>
    </BrowserRouter>
  )
}
