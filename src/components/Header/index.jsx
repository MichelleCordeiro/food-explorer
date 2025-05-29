import { Link } from 'react-router-dom'
import { LuMenu } from 'react-icons/lu'
import { PiReceipt, PiSignOut, PiMagnifyingGlass } from 'react-icons/pi'

import { Logo } from '../Logo'
import { Input } from '../Input'
import { Button } from '../Button'

import { Container, Content, ButtonIcon, Search, ButtonOrder, Logout } from './styles'

export function Header({ isAdmin }) {
  return (
    <Container>
      <Content>
        <ButtonIcon className='mobile-only'>
          <div className='wrapper-icon'>
            <LuMenu size={24} />
          </div>
        </ButtonIcon>

        {!isAdmin ? (
          <>
            <Logo to='/' />
            <ButtonIcon className='btn-order-mobile mobile-only'>
              <div className='wrapper-icon'>
                <PiReceipt size={30} />
                <div id='circle-red'>
                  <span>0</span>
                </div>
              </div>
            </ButtonIcon>
          </>
        ) : (
          <Logo to='/' isAdmin />
        )}

        <Search className='desktop-only'>
          <div id='wrapper-input'>
            <Input icon={PiMagnifyingGlass} placeholder='Busque por pratos ou ingredientes' />
          </div>
        </Search>

        <ButtonOrder className='desktop-only'>
          {!isAdmin ? (
            <Button className='btn-order-desktop' icon title='Pedidos (0)' />
          ) : (
            <Button className='btn-order-desktop' title='Novo prato' />
          )}
        </ButtonOrder>

        <Logout className='desktop-only'>
          <PiSignOut />
        </Logout>
      </Content>
    </Container>
  );
}
