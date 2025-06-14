import { useState } from 'react'

import { PiPlus, PiMinus } from 'react-icons/pi'

import { Container } from './styles'

export function QuantityItem({ quantity, setQuantity }) {
  function handleIncrementQuantity() {
    setQuantity(prevState => prevState + 1)
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity(prevState => prevState - 1)
    }
  }

  return (
    <Container className='quantity'>
      <button type='button' onClick={handleDecrementQuantity}>
        <PiMinus />
      </button>

      <span>{quantity}</span>

      <button type='button' onClick={handleIncrementQuantity}>
        <PiPlus />
      </button>
    </Container>
  )
}
