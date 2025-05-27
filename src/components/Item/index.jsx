import imageItem from '../../assets/items/image1.png'
import { QuantityItem } from '../QuantityItem'
import { Button } from '../Button'
import { PiHeart, PiPencilSimpleLight } from 'react-icons/pi'

import { Container, Cart } from './styles'

export function Item({ isAdmin, title, description, price }) {
  return (
    <Container>
      {isAdmin ? (
        <>
          <div id='wrapper-heart'>
            <PiPencilSimpleLight size={'2.4rem'} />
          </div>

          <img src={imageItem} alt='Foto do item' />

          <h3>{title}</h3>
          <span className='description desktop-only'>{description}</span>
          <span className='price mobile-only' style={{ marginBottom: '4.6rem' }}>
            {price}
          </span>
          <span className='price desktop-only' style={{ marginBottom: '3.1rem' }}>
            {price}
          </span>
        </>
      ) : (
        <>
          <div id='wrapper-heart'>
            <PiHeart size={'2.4rem'} />
          </div>

          <img src={imageItem} alt='Foto do item' />

          <h3>{title}</h3>
          <span className='description desktop-only'>{description}</span>
          <span className='price'>{price}</span>

          <Cart className='cart'>
            <QuantityItem sizeIcon={18} />
            <Button className='btn-cart' title='incluir' />
          </Cart>
        </>
      )}
    </Container>
  );
}
