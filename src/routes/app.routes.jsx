import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'
import { Cart } from '../pages/Cart'
import { DetailsDish } from '../pages/DetailsDish'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<NewDish />} />
      <Route path='/edit/:id' element={<EditDish />} />
      <Route path='/details/:id' element={<DetailsDish />} />
      <Route path='/cart' element={<Cart />} />

      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}
