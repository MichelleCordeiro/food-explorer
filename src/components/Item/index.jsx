import { QuantityItem } from '../QuantityItem'
import { Button } from '../Button'
import { PiHeart, PiPencilSimpleLight } from 'react-icons/pi'

import { useAuth } from '../../hooks/auth'

import { Container, Cart } from './styles'

export function Item({ data, ...rest }) {
  const { user } = useAuth()
  const isAdmin = user?.is_admin

  return (
    <Container>
      {isAdmin ? (
        <>
          <div id='wrapper-heart'>
            <PiPencilSimpleLight size={'2.4rem'} />
          </div>

          <img src={data.src} alt='Foto do item' />

          <h3>{data.title}</h3>
          <span className='description desktop-only'>{data.description}</span>
          <span className='price mobile-only' style={{ marginBottom: '4.6rem' }}>
            {data.price}
          </span>
          <span className='price desktop-only' style={{ marginBottom: '3.1rem' }}>
            {data.price}
          </span>
        </>
      ) : (
        <>
          <div id='wrapper-heart'>
            <PiHeart size={'2.4rem'} />
          </div>

          <img src={data.src} alt='Foto do item' />

          <h3>{data.title}</h3>
          <span className='description desktop-only'>{data.description}</span>
          <span className='price'>{data.price}</span>

          <Cart className='cart'>
            <QuantityItem sizeIcon={18} />
            <Button className='btn-cart' title='incluir' />
          </Cart>
        </>
      )}
    </Container>
  )
}
