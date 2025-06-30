import logo from '../../assets/logo.png'

import { useLocation } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { Container } from './styles'

import { useSearch } from '../../contexts/SearchContext'

export function Logo() {
  const { user } = useAuth()
  const isAdmin = user?.is_admin

  const { setSearch } = useSearch()

  const location = useLocation()

  function handleClick() {
    if (location.pathname !== '/') {
      setSearch('')
    }
  }

  return (
    <Container id='logo' onClick={handleClick} to="/">
      {!isAdmin ? (
        <>
          <img src={logo} alt='Logo do Food Explorer' />
          <span className='words'>food explorer</span>
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
