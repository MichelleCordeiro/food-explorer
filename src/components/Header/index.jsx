import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { LuMenu } from 'react-icons/lu'
import { PiReceipt, PiSignOut, PiMagnifyingGlass } from 'react-icons/pi'

import { Logo } from '../Logo'
import { Input } from '../Input'
import { Button } from '../Button'
import { Menu } from '../Menu'

import { useAuth } from '../../hooks/auth'

import { Container, Content, ButtonIcon, Search, ButtonOrder, Logout } from './styles'

export function Header() {
  const { user, signOut } = useAuth()
  const isAdmin = user?.is_admin

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate()

  function handleSignOut() {
    signOut()
    navigate('/')
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

  return (
    <Container>
      <Content>
        <ButtonIcon className='mobile-only'>
          <div className='wrapper-icon' onClick={() => setIsMenuOpen(true)}>
            <LuMenu size={24} />
          </div>
        </ButtonIcon>

        <Logo to='/' />

        <ButtonIcon className='btn-order-mobile mobile-only'>
          <div className='wrapper-icon'>
            <PiReceipt size={30} />
            <div id='circle-red'>
              <span>0</span>
            </div>
          </div>
        </ButtonIcon>

        <Search className='desktop-only'>
          <div id='wrapper-input'>
            <Input
              id='search-header'
              name='search-header'
              type='search'
              icon={PiMagnifyingGlass}
              placeholder='Busque por pratos ou ingredientes'
            />
          </div>
        </Search>

        <ButtonOrder className='desktop-only'>
          {!isAdmin ? (
            <Button className='btn-order-desktop' icon title='Pedidos (0)' />
          ) : (
            <Button className='btn-order-desktop' title='Novo prato' />
          )}
        </ButtonOrder>

        <Logout className='desktop-only' onClick={handleSignOut}>
          <PiSignOut />
        </Logout>

        <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </Content>
    </Container>
  )
}
