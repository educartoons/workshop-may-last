import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  children: React.ReactNode
  variant: variants
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

type variants = keyof typeof Variants

const Variants = {
  solid: 'bg-black text-white px-4 py-2 rounded-full text-sm font-medium',
  solidinverse: 'bg-white px-4 py-2 rounded-full text-sm font-medium',
  outlined: 'border border-black px-4 py-2 rounded-full text-sm font-medium',
  text: 'px-4 py-2 text-sm font-medium',
}

export default function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button className={Variants[variant]} {...rest}>
      {children}
    </button>
  )
}
