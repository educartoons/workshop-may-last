import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

type SubMenuProps = {
  show: boolean
  menu: {
    parent: string
    link: string
    items: string[]
  }
}

export default function SubMenu({ menu }: SubMenuProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          translateY: -20,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          type: 'spring',
          duration: 1.5,
        }}
      >
        <h2 className="text-sm font-semibold mb-4">
          <Link to={menu.link}>{menu.parent}</Link>
        </h2>
        <ul>
          {menu.items.map((item) => (
            <li className="mb-4">
              <Link to="/" className="text-xs text-gray-500 font-medium mb">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  )
}
