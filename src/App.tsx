import { useState } from 'react'
import Products from './components/Products'
import { PRODUCTS } from './utils/constants'
import Header from './components/Header'
import Counter from './components/Counter'

function App() {
  const [showCounter, setShowCounter] = useState(true)

  const handleClick = () => {
    setShowCounter(!showCounter)
  }

  return (
    <div>
      <Header />
      {showCounter ? <Counter /> : null}
      <div className="text-center mt-5">
        <button onClick={handleClick}>Toggle Counter</button>
      </div>
      <Products list={PRODUCTS} />
    </div>
  )
}

export default App
