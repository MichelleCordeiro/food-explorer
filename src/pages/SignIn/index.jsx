import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { useAuth } from '../../hooks/auth'

import { Container, Content, Form } from './styles'

export function SignIn() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  async function handleSignIn(event) {
    event.preventDefault()
    setLoading(true)

    await signIn({ email, password })
    setLoading(false)
  }

  return (
    <Container>
      <Content>
        <Logo to='/' />

        <Form onSubmit={handleSignIn}>
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
            title="Entrar"
            loading={loading}
            type="submit"
            disabled={loading}
          />
        </Form>

        <Link to='/register'>Criar uma conta</Link>
      </Content>
    </Container>
  )
}
