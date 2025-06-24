import { Container } from './styles'

export function EmptyMessage({ message = 'Nenhum resultado encontrado.' }) {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  )
}
