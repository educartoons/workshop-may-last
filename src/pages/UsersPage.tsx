import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Store from '../components/Store'
import Wrapper from '../components/Wrapper'
import { setUsers } from '../store/usersSlice'
import { RootState } from '../store/store'

export default function UsersPage() {
  const { items } = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch()

  const handleFetchUsers = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    if (data) {
      dispatch(
        setUsers({
          users: data.results,
        })
      )
    }
  }

  useEffect(() => {
    if (items.length === 0) {
      handleFetchUsers()
    }
  }, [])

  return (
    <Store>
      <Wrapper>
        <h2>User List</h2>
        <div className="grid grid-cols-4 gap-4">
          {items &&
            items.map((user) => (
              <div>
                <img src={user.image} alt={user.name} />
                <h2>{user.name}</h2>
              </div>
            ))}
        </div>
      </Wrapper>
    </Store>
  )
}
