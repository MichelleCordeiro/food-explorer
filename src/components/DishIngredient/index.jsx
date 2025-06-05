import { PiPlus } from 'react-icons/pi'
import { IoMdClose } from 'react-icons/io'

import { Container } from './styles'

export function DishIngredient({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type='text'
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type='button'
        onClick={onClick}
    >
        {isNew ? <PiPlus /> : <IoMdClose className='btn-close' />}
      </button>
    </Container>
  )
}
