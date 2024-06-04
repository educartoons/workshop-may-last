import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input({ ...rest }: InputProps) {
  return (
    <input
      className="block border border-gray-300 px-2 py-3 rounded-lg w-full"
      {...rest}
    />
  )
}
