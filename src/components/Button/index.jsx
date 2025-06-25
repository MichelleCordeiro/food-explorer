import { PiReceipt } from 'react-icons/pi'

import { Container } from './styles'

export function Button({ title, loading, hasError, type = 'button', icon, ...rest }) {
  return (
    <Container
      type={type}
      disabled={hasError || loading}
      {...rest}
    >
      {icon && <PiReceipt size={32} />}
      {loading ? 'Carregando...' : title}
    </Container>
  )
}
