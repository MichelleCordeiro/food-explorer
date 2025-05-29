import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'
import { Cart } from '../pages/Cart'
import { DishDetails } from '../pages/DishDetails'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<NewDish />} />
      <Route path='/edit' element={<EditDish />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/details/:id' element={<DishDetails />} />
    </Routes>
  )
}
