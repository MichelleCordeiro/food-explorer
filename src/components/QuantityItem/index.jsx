import { useState } from 'react'

import { PiPlus, PiMinus } from 'react-icons/pi'

import { Container } from './styles'

export function QuantityItem({ sizeIcon }) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrementQuantity() {
    // const newQuantity = quantity + 1
    setQuantity(quantity + 1)
    // onChange(newQuantity)
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      // const newQuantity = quantity - 1
      setQuantity(quantity - 1)
      // onChange(newQuantity)
    }
  }


  return (
    <Container className='quantity'>
      {/* <button type='button'> */}
      <button
        type='button'
        onClick={handleDecrementQuantity}
      >
        <PiMinus size={sizeIcon} />
      </button>

      <span>{quantity}</span>

      <button
        type='button'
        onClick={handleIncrementQuantity}
      >
        <PiPlus size={sizeIcon} />
      </button>
    </Container>
  )
}
