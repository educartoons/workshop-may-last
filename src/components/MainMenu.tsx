import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useMeasure } from '@uidotdev/usehooks'
import { MENUITEMS, NAVITEMS } from '../utils/constants'
import Wrapper from './Wrapper'
import SubMenu from './SubMenu'
import { useState } from 'react'

export default function MainMenu() {
  const [show, setShow] = useState(false)
  const [index, setIndex] = useState(0)
  const [ref, { height }] = useMeasure()

  const menu = MENUITEMS[index]

  const handleShow = (idx: number) => {
    setShow(true)
    setIndex(idx)
  }

  const handleHide = () => {
    setShow(false)
  }

  return (
    <nav>
      <ul className="flex">
        {NAVITEMS.map((item, idx) => (
          <li onMouseEnter={() => handleShow(idx)} onMouseLeave={handleHide}>
            <div>
              <Link to={item.link} className="px-3">
                {item.name}
              </Link>
            </div>
            <AnimatePresence>
              {show ? (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: height! > 0 ? height : null }}
                  transition={{
                    type: 'spring',
                    bounce: 0,
                    duration: 0.2,
                  }}
                  className="absolute z-10 bg-white left-0 right-0"
                >
                  <div ref={ref} className="pt-14 pb-5">
                    <Wrapper>
                      <div className="w-2/3 mx-auto">
                        <div className="grid grid-cols-4 gap-4">
                          {menu.map((menu) => {
                            return <SubMenu show={show} menu={menu} />
                          })}
                        </div>
                      </div>
                    </Wrapper>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  )
}
