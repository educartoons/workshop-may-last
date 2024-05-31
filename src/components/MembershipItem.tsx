import Button from './Button'

type MembershipItemProps = {
  item: {
    subtitle: string
    title: string
    image: string
    button: string
  }
}

export default function MembershipItem({ item }: MembershipItemProps) {
  return (
    <div className="relative">
      <div>
        <img src={item.image} alt={item.title} />
      </div>
      <div className="absolute bottom-12 left-12">
        <h3 className="text-white text-base font-normal">{item.subtitle}</h3>
        <h2 className="text-white text-2xl font-medium">{item.title}</h2>
        <div className="mt-4">
          <Button variant="solid">{item.button}</Button>
        </div>
      </div>
    </div>
  )
}
