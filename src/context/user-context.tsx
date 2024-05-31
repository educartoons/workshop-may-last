import { createContext, useContext, useEffect } from 'react'

type UserContextT =
  | {
      user: {
        fullname: string
        size: number
      }
    }
  | undefined

export const UserContext = createContext<UserContextT>(undefined)

type UserContextProviderProps = {
  children: React.ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  return (
    <UserContext.Provider
      value={{
        user: {
          fullname: 'Eduar Ruben Apaza Yanez',
          size: 11.5,
        },
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const value = useContext(UserContext)
  if (value === undefined) {
    throw new Error(
      'useUserContext should be used inside UserContextProvider component'
    )
  }
  return value
}
