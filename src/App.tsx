import Header from './components/Header'
import ProductPage from './pages/ProductPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
