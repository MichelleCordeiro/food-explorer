import { useNavigate } from 'react-router-dom'

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'
import { PiMagnifyingGlassBold, PiX } from 'react-icons/pi'

import { useAuth } from '../../hooks/auth'

import { Container, Close, MenuItems } from './styles'

export function Menu({ isOpen, setIsOpen }) {
  const { user, signOut } = useAuth()
  const isAdmin = user?.is_admin

  const navigate = useNavigate()

  function handleNew() {
    navigate('/new')
  }

  function handleSignOut() {
    signOut()
    navigate('/')
  }

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
          <Input icon={PiMagnifyingGlassBold} placeholder='Busque por pratos ou ingredientes' />

          <div className='wrapper-menus'>
            {isAdmin ? (
              <div className='line'>
                <ButtonText
                  title='Novo prato'
                  onClick={handleNew}
                />
              </div>
            ) : null}

            <div className='line'>
              <ButtonText
                title='Sair'
                onClick={handleSignOut}
              />
            </div>
          </div>
        </div>
      </MenuItems>
    </Container>
  );
}
