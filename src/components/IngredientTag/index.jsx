import { Container } from './styles'

export function IngredientTag({ title, icon: Icon, ...rest }) {
  return (
    <Container className='tags' {...rest}>
      {title}
      {Icon && <Icon size={24} />}
    </Container>
  )
}
