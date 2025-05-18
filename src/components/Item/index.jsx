import { Button } from '../Button'
import { Container } from './styles'
import { PiMinus, PiPlus} from 'react-icons/pi'


export function Item({ title, description, price }) {
  return (
    <Container>
      <h4>{title}</h4>
      <span className='description'>{description}</span>
      <span className='price'>{price}</span>

      <div className='cart'>
        <div className='quantity'>
          <PiMinus size={18} />
          <span>01</span>
          <PiPlus size={18} />
        </div>

        <Button title='incluir' />
      </div>
    </Container>
  )
}
