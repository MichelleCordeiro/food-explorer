import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'
import { PiMagnifyingGlassBold, PiX } from 'react-icons/pi'

import { useSearch } from '../../contexts/SearchContext'
import { useAuth } from '../../hooks/auth'

import { Container, Close, MenuItems } from './styles'

let menuTimeoutId

export function Menu({ isOpen, setIsOpen }) {
  const { user, signOut } = useAuth()
  const isAdmin = user?.is_admin

  const { search, setSearch } = useSearch()

  const navigate = useNavigate()
  const location = useLocation()

  const inputRef = useRef()

  function handleNew() {
    navigate('/new')
    setIsOpen(false)
  }

  function handleSignOut() {
    signOut()
    navigate('/')
    setIsOpen(false)
  }

  function handleSearch(event) {
    const value = event.target.value.trimStart()
    setSearch(value)
  }

  useEffect(() => {
    if (menuTimeoutId) clearTimeout(menuTimeoutId)

    if (search.length > 1) {
      menuTimeoutId = setTimeout(() => {
        setIsOpen(false)
        navigate('/')
      }, 500)
    }

    return () => clearTimeout(menuTimeoutId)
  }, [search, location.pathname, navigate, setIsOpen])

  return (
    <Container $isOpen={isOpen}>
      <Close>
        <div className='wrapper'>
          <div className='wrapper-close' onClick={() => setIsOpen(false)}>
            <PiX size={26} />
            <span>Menu</span>
          </div>
        </div>
      </Close>

      <MenuItems>
        <div className='wrapper'>
          <Input
            ref={inputRef}
            icon={PiMagnifyingGlassBold}
            placeholder='Busque por pratos ou ingredientes'
            value={search}
            onChange={handleSearch}
          />

          <div className='wrapper-menus'>
            {isAdmin ? (
              <div className='line'>
                <ButtonText title='Novo prato' onClick={handleNew} />
              </div>
            ) : null}

            <div className='line'>
              <ButtonText title='Sair' onClick={handleSignOut} />
            </div>
          </div>
        </div>
      </MenuItems>
    </Container>
  )
}
