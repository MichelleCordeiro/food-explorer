import logo from '../../assets/logo.png'

import { Container } from './styles'

export function Logo({ isAdmin, ...rest }) {
  return (
    <Container id='logo' {...rest}>
      {!isAdmin ? (
        <>
          <img src={logo} alt='Logo do Food Explorer' />
          <span className='words'>Food Explorer</span>
        </>
      ) : (
        <>
          <img src={logo} alt='Logo do Food Explorer - Admin' />
          <span className='words'>
            Food Explorer
            <span id='word-admin'>admin</span>
          </span>
        </>
      )}
    </Container>
  )
}
