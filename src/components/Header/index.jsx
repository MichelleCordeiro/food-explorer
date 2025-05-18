import { Container, Content, Logo, Search, Logout } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'
import { PiSignOut, PiMagnifyingGlass } from 'react-icons/pi'

export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <img src='../../src/assets/logo.png' alt='Logo do Food Explorer' />
          <h1>Food Explorer</h1>
        </Logo>

        <Search>
          <Input icon={PiMagnifyingGlass} placeholder='Busque por pratos ou ingredientes' />
        </Search>

        <Button icon title='Pedidos (0)' />

        <Logout>
          <PiSignOut />
        </Logout>
      </Content>
    </Container>
  )
}
