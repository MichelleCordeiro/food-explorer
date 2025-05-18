import { Container } from './styles'
import { PiReceipt } from 'react-icons/pi'

export function Button({ title, loading, icon, ...rest }) {
  return (
    <Container
      type='button'
      disabled={loading}
      {...rest}
    >
      {icon && <PiReceipt size={32} />}
      {loading ? 'Carregando...' : title}
    </Container>
  )
}
