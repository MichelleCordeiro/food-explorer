import { Input } from '../Input'
import { ButtonText } from '../ButtonText'
import { PiMagnifyingGlassBold, PiX } from 'react-icons/pi'

import { Container, Close, MenuItems } from './styles'

export function Menu({ isAdmin, isOpen, setIsOpen }) {
  return (
    <Container isOpen={isOpen}>
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
            icon={PiMagnifyingGlassBold}
            placeholder='Busque por pratos ou ingredientes'
          />

          <div className='wrapper-menus'>
            {isAdmin && (
              <div className="line">
                <ButtonText
                  title='Novo prato'
                  onClick={() => setIsOpen(false)}
                />
              </div>
            )}

          <div className="line">
            <ButtonText
              title='Sair'
              onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      </MenuItems>
    </Container>
  )
}
