import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { auth } from '../utils/firebase'

export const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setIsLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  if (!user && !isLoading) {
    return <Navigate to='/login' />
  }
  return children || <Outlet />
}
