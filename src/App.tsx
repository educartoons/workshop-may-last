import Header from './components/Header'
import ProductPage from './pages/ProductPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import NotFoundPage from './pages/NotFoundPage'
import { UserContextProvider } from './context/user-context'
import UsersPage from './pages/UsersPage'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </UserContextProvider>
    </BrowserRouter>
  )
}
