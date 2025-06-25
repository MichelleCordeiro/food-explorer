import { Container } from './styles'

export function ErrorMessage({ errorMsg }) {
  return (
    <Container>
      {errorMsg}
    </Container>
  )
}
