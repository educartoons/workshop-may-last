import { useEffect, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleKeypress = (event: KeyboardEvent) => {
    console.count(event.key)
    if (event.key === 'Enter') {
      setCount((current) => {
        return current + 1
      })
    }
  }

  useEffect(() => {
    window.addEventListener('keypress', handleKeypress)
    return () => {
      window.removeEventListener('keypress', handleKeypress)
    }
  }, [])

  return (
    <div className="text-center">
      <h2 className="text-3xl">{count}</h2>
      <button onClick={handleClick}>Agregar</button>
    </div>
  )
}

export default Counter
