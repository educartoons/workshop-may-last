import { Link } from 'react-router-dom'
import Wrapper from './Wrapper'
import { IconConverse, IconJordan } from '../utils/icons'

export default function PreHeader() {
  return (
    <div className="bg-gray-100 py-1 hidden md:block">
      <Wrapper>
        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-2">
              <Link to="/">
                <IconJordan width={30} />
              </Link>
              <Link to="/">
                <IconConverse width={30} />
              </Link>
            </div>
          </div>
          <div>
            <nav>
              <ul className="flex gap-4">
                <li className="text-xs">Find a Store</li>
                <li className="text-xs">Help</li>
                <li className="text-xs">Join Us</li>
                <li className="text-xs">
                  <Link to="/auth/lookup">Sign In</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
