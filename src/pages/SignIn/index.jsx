import { Link } from 'react-router-dom'

import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Content, Form } from './styles'

export function SignIn() {
  return (
    <Container>
      <Content>
        <Logo to='/' />

        <Form action=''>
          <label htmlFor='email'>E-mail</label>
          <Input type='email' name='email' id='email' placeholder='Exemplo: exemplo@mail.com.br' />

          <label htmlFor='password'>Senha</label>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='No mínimo 6 caracteres'
          />

          <Button type='submit' title='Entrar' />
        </Form>

        <Link to='/register'>Criar uma conta</Link>
      </Content>
    </Container>
  )
}
