import Wrapper from '../components/Wrapper'
import { useFetchUsers } from '../hooks/useFetchUsers'

export default function UsersPage() {
  const users = useFetchUsers()
  return (
    <Wrapper>
      <h2>User List</h2>
      <div className="grid grid-cols-4 gap-4">
        {users.map((user) => (
          <div>
            <img src={user.image} alt={user.name} />
            <h2>{user.name}</h2>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}
