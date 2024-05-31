import { useUserContext } from '../context/user-context'

export default function ProductDetails() {
  const value = useUserContext()

  return (
    <div className="px-4 sm:px-10 md:px-0">
      <h3 className="text-base font-medium text-red-800">Just in</h3>
      <h2 className="text-2xl font-medium">Nike Dunk Low</h2>
      <p className="text-base text-gray-400 font-normal">Men's Shoes</p>
      <p className="text-base text-gray-400 font-normal">2 colors</p>
      <p className="text-base font-medium mt-3">$125</p>
      <p>{value.user.fullname}</p>
      <p>{value.user.size}</p>
    </div>
  )
}
