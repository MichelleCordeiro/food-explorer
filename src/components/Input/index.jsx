import { Container } from './styles'

export function Input({ icon: Icon, $hasError = false, ...rest }) {
  return (
    <Container $hasError={$hasError}>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  )
}
