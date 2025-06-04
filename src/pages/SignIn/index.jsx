import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { useAuth } from '../../hooks/auth'

import { Container, Content, Form } from './styles'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Content>
        <Logo to='/' />

        <Form action=''>
          <label htmlFor='email'>E-mail</label>
          <Input
            type='email'
            name='email'
            id='email'
            placeholder='Exemplo: exemplo@mail.com.br'
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor='password'>Senha</label>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='No mínimo 6 caracteres'
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            title='Entrar'
            onClick={handleSignIn}
          />
        </Form>

        <Link to='/register'>Criar uma conta</Link>
      </Content>
    </Container>
  )
}
