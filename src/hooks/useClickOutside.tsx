import { MutableRefObject, useEffect, useRef } from 'react'

type Handler = () => void

export default function useClickOutside<T extends HTMLElement>(
  handler: Handler
): MutableRefObject<T | null> {
  const ref = useRef<T | null>(null)

  const listener = (event: MouseEvent) => {
    if (!ref.current || ref.current.contains(event.target as Node)) {
      return
    }
    handler()
  }

  useEffect(() => {
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref])

  return ref
}
