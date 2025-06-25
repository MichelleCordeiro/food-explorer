import { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { ErrorMessage } from '../../components/ErrorMessage'

import { Container, Content, Form } from './styles'

export function SignUp() {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [errorEmailFormat, setErrorEmailFormat] = useState('')
  const [errorPasswordFormat, setErrorPasswordFormat] = useState('')

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const hasFormatErrors = useMemo(() => {
    return !!errorEmailFormat || !!errorPasswordFormat || !name || !email || !password
  }, [errorEmailFormat, errorPasswordFormat, name, email, password])

  const navigate = useNavigate()

  function handleEmailChange(event) {
    const value = event.target.value
    setEmail(value)

    if (!emailRegex.test(value)) {
      setErrorEmailFormat('Digite um formato de e-mail válido!')
    } else {
      setErrorEmailFormat('')
    }
  }

  function handlePasswordChange(event) {
    const value = event.target.value
    setPassword(value)

    if (!strongPasswordRegex.test(value)) {
      setErrorPasswordFormat(
        'A senha deve conter pelo menos 6 caracteres, incluindo números, letras maiúsculas e minúsculas!'
      )
    } else {
      setErrorPasswordFormat('')
    }
  }

  function handleSignUp(event) {
    event.preventDefault()

    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    let hasError = false

    if (hasError) return

    setLoading(true)

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar')
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Container>
      <Content>
        <Logo to='/' />

        <Form onSubmit={handleSignUp}>
          <h1 className='desktop-only'>Crie sua conta</h1>

          <div className='wrapper'>
            <label htmlFor='name'>Seu nome</label>
            <Input
              type='name'
              name='name'
              id='name'
              placeholder='Exemplo: Maria da Silva'
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className={errorEmailFormat ? 'wrapper error' : 'wrapper'}>
            <label htmlFor='email'>E-mail</label>
            <Input
              type='text'
              name='email'
              id='email'
              placeholder='Exemplo: exemplo@mail.com.br'
              value={email}
              onChange={handleEmailChange}
              $hasError={errorEmailFormat}
            />
            <ErrorMessage errorMsg={errorEmailFormat} />
          </div>

          <div className={errorPasswordFormat ? 'wrapper error' : 'wrapper'}>
            <label htmlFor='password'>Senha</label>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='No mínimo 6 caracteres'
              value={password}
              onChange={handlePasswordChange}
              $hasError={errorPasswordFormat}
            />
            <ErrorMessage errorMsg={errorPasswordFormat} />
          </div>

          <Button
            id='btnEntrar'
            type='submit'
            title='Criar conta'
            loading={loading}
            disabled={hasFormatErrors || loading}
          />

          <Link to='/'>Já tenho uma conta</Link>
        </Form>
      </Content>
    </Container>
  )
}
