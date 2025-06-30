import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { LuMenu } from 'react-icons/lu'
import { PiReceipt, PiSignOut, PiMagnifyingGlass } from 'react-icons/pi'

import { Logo } from '../Logo'
import { Input } from '../Input'
import { Button } from '../Button'
import { Menu } from '../Menu'

import { useSearch } from '../../contexts/SearchContext'
import { useAuth } from '../../hooks/auth'

import { Container, Content, ButtonIcon, Search, ButtonOrder, Logout } from './styles'

let timeoutId

export function Header() {
  const { user, signOut } = useAuth()
  const isAdmin = user?.is_admin

  const { search, setSearch, isMenuOpen, setIsMenuOpen } = useSearch()

  const navigate = useNavigate()
  const location = useLocation()

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  function handleNew() {
    navigate('/new')
  }

  function handleToCart() {
    navigate(`/cart`)
  }

  function handleSearch(event) {
    const value = event.target.value.trimStart()
    setSearch(value)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (timeoutId) clearTimeout(timeoutId)

    if (search.length > 1 && location.pathname !== '/') {
      timeoutId = setTimeout(() => {
        navigate('/')
      }, 500)
    }

    return () => clearTimeout(timeoutId)
  }, [search, location.pathname, navigate])

  return (
    <Container>
      <Content>
        <ButtonIcon className='mobile-only'>
          <div className='wrapper-icon' onClick={() => setIsMenuOpen(true)}>
            <LuMenu size={24} />
          </div>
        </ButtonIcon>

        <Logo />

        <Search className='desktop-only'>
          <div id='wrapper-input'>
            <Input
              id='search-header'
              name='search-header'
              type='text'
              icon={PiMagnifyingGlass}
              placeholder='Busque por pratos ou ingredientes'
              value={search}
              onChange={handleSearch}
            />
          </div>
        </Search>

        {!isAdmin ? (
          <>
            <ButtonIcon className='btn-order-mobile mobile-only'>
              <div className='wrapper-icon'>
                <PiReceipt size={30} />
                <div id='circle-red'>
                  <span>0</span>
                </div>
              </div>
            </ButtonIcon>

            <ButtonOrder className='desktop-only'>
              <Button
                className='btn-order-desktop'
                icon
                title='Pedidos (0)'
                onClick={handleToCart}
              />
            </ButtonOrder>
          </>
        ) : (
          <ButtonOrder className='desktop-only'>
            <Button className='btn-new' title='Novo prato' onClick={handleNew} />
          </ButtonOrder>
        )}

        <Logout className='desktop-only' onClick={handleSignOut}>
          <PiSignOut />
        </Logout>

        <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </Content>
    </Container>
  )
}
