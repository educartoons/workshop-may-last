import Counters from '../components/Counters'
import Membership from '../components/Membership'
import Store from '../components/Store'
import TreeMap from '../components/TreeMap'
import Wrapper from '../components/Wrapper'

export default function HomePage() {
  return (
    <Store>
      <Wrapper>
        <Membership />
        <Counters />
        <div>
          <TreeMap />
        </div>
      </Wrapper>
    </Store>
  )
}
