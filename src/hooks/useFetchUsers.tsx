import { useEffect, useState } from 'react'

type User = {
  name: string
  image: string
}

export function useFetchUsers() {
  const [users, setUsers] = useState<User[]>([])
  const fetchUsers = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    setUsers(data.results)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return users
}
