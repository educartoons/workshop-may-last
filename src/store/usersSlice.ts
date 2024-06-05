import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type User = {
  name: string
  image: string
}

const initialState = {
  items: [] as User[],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (
      state,
      action: PayloadAction<{
        users: User[]
      }>
    ) => {
      state.items = action.payload.users
    },
  },
})

const usersReducer = usersSlice.reducer
const { setUsers } = usersSlice.actions

export { usersReducer, setUsers }
