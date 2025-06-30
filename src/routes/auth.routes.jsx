import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes() {
  // const user = JSON.parse(localStorage.getItem('@foodExplorer:user'))
  // const { user } = useAuth()

  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='register' element={<SignUp />} />

      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}
