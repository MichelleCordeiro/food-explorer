import { PiPlus, PiMinus } from 'react-icons/pi'
// import { Button } from '../Button'

import { Container } from './styles'

export function QuantityItem() {
  return (
    <Container>
      <button type='button'>
        <PiMinus />
      </button>

      <p>01</p>

      <button type='button'>
        <PiPlus />
      </button>
    </Container>
  )
}
