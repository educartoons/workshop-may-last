import { useState } from 'react'
import Header from './components/Header'
import ProductPage from './pages/ProductPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import NotFoundPage from './pages/NotFoundPage'
import { UserContextProvider } from './context/user-context'
import UsersPage from './pages/UsersPage'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'

export default function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/auth/*" element={<AuthPage />} />
          </Routes>
        </div>
      </UserContextProvider>
    </BrowserRouter>
  )
}
