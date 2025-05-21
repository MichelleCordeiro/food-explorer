import { PiCaretLeft } from 'react-icons/pi'

import { Container } from './styles'

export function ButtonText({ title, icon, ...rest }) {
  return (
    <Container type='button' {...rest}>
      {icon && <PiCaretLeft size={32} />}
      {title}
    </Container>
  )
}
