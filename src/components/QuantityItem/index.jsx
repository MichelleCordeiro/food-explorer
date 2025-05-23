import { PiPlus, PiMinus } from 'react-icons/pi'

import { Container } from './styles'

export function QuantityItem({ sizeIcon }) {
  return (
    <Container className='quantity'>
      <button type='button'>
        <PiMinus size={sizeIcon} />
      </button>

      <p>01</p>

      <button type='button'>
        <PiPlus size={sizeIcon} />
      </button>
    </Container>
  );
}
