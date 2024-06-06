import MembershipItem from './MembershipItem'
import { MEMBESHIP_ITEMS } from '../utils/constants'

export default function Membership() {
  const items = MEMBESHIP_ITEMS
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <MembershipItem key={index} item={item} />
      ))}
    </div>
  )
}
