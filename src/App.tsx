import { SnackbarProvider } from 'notistack'
import { Provider as StoreProvider } from 'react-redux'
import ProductPage from './pages/ProductPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import NotFoundPage from './pages/NotFoundPage'
import { UserContextProvider } from './context/user-context'
import UsersPage from './pages/UsersPage'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import { store } from './store/store'
import AccountPage from './pages/AccountPage'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <UserContextProvider>
          <SnackbarProvider>
            <div>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/" element={<ProtectedRoute />}>
                  <Route path="/account" element={<AccountPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/auth/*" element={<AuthPage />} />
              </Routes>
            </div>
          </SnackbarProvider>
        </UserContextProvider>
      </BrowserRouter>
    </StoreProvider>
  )
}
