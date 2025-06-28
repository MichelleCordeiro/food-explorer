import logo from '../../assets/logo.png'

import { useNavigate, useLocation } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { Container } from './styles'

import { useSearch } from '../../contexts/SearchContext'

export function Logo() {
  const { user } = useAuth()
  const isAdmin = user?.is_admin

  const { setSearch } = useSearch()

  const navigate = useNavigate()
  const location = useLocation()

  function handleClick() {
    if (location.pathname !== '/') {
      setSearch('')
    }
    navigate(to = '/')
  }

  return (
    <Container id='logo' onClick={handleClick}>
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
