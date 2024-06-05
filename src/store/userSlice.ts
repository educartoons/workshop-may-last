import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  fullname: '',
  email: '',
  isAuthenticated: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        email: string
        isAuthenticated: boolean
      }>
    ) => {
      state.email = action.payload.email
      state.isAuthenticated = action.payload.isAuthenticated
    },
  },
})

const userReducer = userSlice.reducer
const { setUser } = userSlice.actions

export { userReducer, setUser }
