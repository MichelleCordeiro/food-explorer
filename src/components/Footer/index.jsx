import { Logo } from '../Logo'

import { Container, Content } from './styles'

export function Footer() {
  return (
    <Container>
      <Content>
        <Logo to='/' />

        <span>© 2023 - Todos os direitos reservados.</span>
      </Content>
    </Container>
  )
}
