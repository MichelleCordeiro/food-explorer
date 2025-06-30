import { Link } from 'react-router-dom'

import cart_under_construction from '../../assets/cart_under_construction.png'
import { Logo } from '../../components/Logo'
import { ButtonText } from '../../components/ButtonText'

import { Container } from './styles'

export function Cart() {
  return (
    <Container>
        <Logo to='/' />

        <Link to='/'>
          <img id='cart' src={cart_under_construction} alt='Cart with cones and website under construction sign' />
        </Link>

    </Container>
  )
}
