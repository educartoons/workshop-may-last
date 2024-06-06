import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
import { RootState } from '../store/store'

export default function ProtectedRoute() {
  const { isAuthenticated } = useSelector((state: RootState) => state.user)
  if (isAuthenticated) {
    return <Outlet />
  }
  return <Navigate to="/auth/lookup" />
}
