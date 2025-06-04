import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Content, Form } from './styles'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar')
        }
      })
  }

  return (
    <Container>
      <Content>
        <Logo to='/' />

        <Form action=''>
          <label htmlFor='name'>Seu nome</label>
          <Input
            type='name'
            name='name'
            id='name'
            placeholder='Exemplo: Maria da Silva'
            onChange={e => setName(e.target.value)}
          />

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

          <Button title='Criar conta' onClick={handleSignUp} />
        </Form>

        <Link to='/'>Já tenho conta</Link>
      </Content>
    </Container>
  )
}
