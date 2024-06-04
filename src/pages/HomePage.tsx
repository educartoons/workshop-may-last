import Membership from '../components/Membership'
import Store from '../components/Store'
import Wrapper from '../components/Wrapper'

export default function HomePage() {
  return (
    <Store>
      <Wrapper>
        <Membership />
      </Wrapper>
    </Store>
  )
}
