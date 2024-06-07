import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState = {
  fullname: '',
  name: '',
  email: '',
  isAuthenticated: false,
  createdAt: '',
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
        fullName: string
        createdAt: string
      }>
    ) => {
      const fullname = action.payload.fullName
      const name = fullname.split(' ')[0]
      const date = moment(action.payload.createdAt)
      const membershipFrom = date.format('MMMM YYYY')

      state.email = action.payload.email
      state.isAuthenticated = action.payload.isAuthenticated
      state.fullname = fullname
      state.name = name
      state.createdAt = membershipFrom
    },
    resetUser: (state) => {
      state.isAuthenticated = false
      state.fullname = ''
      state.email = ''
      state.createdAt = ''
    },
  },
})

const userReducer = userSlice.reducer
const { setUser, resetUser } = userSlice.actions

export { userReducer, setUser, resetUser }
