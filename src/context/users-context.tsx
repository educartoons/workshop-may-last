import { createContext, useContext } from 'react'
import { useFetchUsers } from '../hooks/useFetchUsers'

type User = {
  name: string
  image: string
}

type UsersContextT =
  | {
      users: User[]
    }
  | undefined

const UsersContext = createContext<UsersContextT>(undefined)

type UsersContextProviderProps = {
  children: React.ReactNode
}

export function UsersContextProvider({ children }: UsersContextProviderProps) {
  const users = useFetchUsers()
  return (
    <UsersContext.Provider
      value={{
        users: users,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export function useUsersContext() {
  const value = useContext(UsersContext)
  if (value === undefined) {
    throw new Error(
      'useUsersContext should be used inside UsersContextProvider Component'
    )
  }
  return value
}
